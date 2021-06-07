/* eslint-disable no-useless-constructor */
/* eslint-disable import/export */
/* eslint-disable @typescript-eslint/no-namespace */
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UnexpectedError } from '../../domain/errors';
import { GetConsults } from '../../domain/usecases/get-consults';
import { HttpClient, HttpStatusCode } from '../protocols/http';

export class RemoteGetConsults implements GetConsults {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteGetConsults.Model[]>,
  ) {}

  async getAll(): Promise<GetConsults.Model[]> {
    const token = await AsyncStorage.getItem('token');

    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body || [];
      default:
        throw new UnexpectedError();
    }
  }
}

export namespace RemoteGetConsults {
  export type Model = GetConsults.Model;
}
