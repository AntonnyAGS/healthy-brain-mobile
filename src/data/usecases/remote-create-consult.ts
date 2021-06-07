/* eslint-disable no-useless-constructor */
/* eslint-disable import/export */
/* eslint-disable @typescript-eslint/no-namespace */
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CreateConsult } from '../../domain/usecases/create-consult';
import { HttpClient, HttpStatusCode } from '../protocols/http';

import { UnexpectedError, InvalidCredentialsError } from '../../domain/errors';

export class RemoteCreateConsult implements CreateConsult {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteCreateConsult.Model>,
  ) {}

  async create(params: CreateConsult.Params): Promise<CreateConsult.Model> {
    const token = AsyncStorage.getItem('token');

    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'post',
      body: params,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.created:
        return httpResponse.body as CreateConsult.Model;
      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialsError();
      default:
        throw new UnexpectedError();
    }
  }
}

export namespace RemoteCreateConsult {
  export type Model = CreateConsult.Model;
}
