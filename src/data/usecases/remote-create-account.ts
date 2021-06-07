/* eslint-disable no-useless-constructor */
/* eslint-disable import/export */
/* eslint-disable @typescript-eslint/no-namespace */
import { CreateAccount } from '../../domain/usecases/create-account';
import { HttpClient } from '../protocols/http';

export class RemoteCreateAccount implements CreateAccount {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteCreateAccount.Model>,
  ) {}

  async create(params: CreateAccount.Params): Promise<void> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'post',
      body: params,
    });

    console.log(httpResponse);
  }
}

export namespace RemoteCreateAccount {
  export type Model = CreateAccount.Model;
}
