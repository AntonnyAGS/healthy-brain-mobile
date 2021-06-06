/* eslint-disable no-useless-constructor */
/* eslint-disable import/export */
/* eslint-disable @typescript-eslint/no-namespace */
import { Authentication } from '../../domain/usecases/authentication';
import { HttpClient, HttpStatusCode } from '../protocols/http';

import { UnexpectedError, InvalidCredentialsError } from '../../domain/errors';

export class RemoteAuthentication implements Authentication {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteAuthentication.Model>,
  ) {}

  async auth(params: Authentication.Params): Promise<Authentication.Model> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'post',
      body: params,
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.created:
        return httpResponse.body as Authentication.Model;
      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialsError();
      default:
        throw new UnexpectedError();
    }
  }
}

export namespace RemoteAuthentication {
  export type Model = Authentication.Model;
}
