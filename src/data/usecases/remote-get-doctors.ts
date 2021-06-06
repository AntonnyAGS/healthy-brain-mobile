/* eslint-disable no-useless-constructor */
/* eslint-disable import/export */
/* eslint-disable @typescript-eslint/no-namespace */
import { UnexpectedError } from '../../domain/errors';
import { GetDoctors } from '../../domain/usecases/get-doctors';
import { HttpClient, HttpStatusCode } from '../protocols/http';

export class RemoteGetDoctors implements GetDoctors {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteGetDoctors.Model[]>,
  ) {}

  async getAll(): Promise<GetDoctors.Model[]> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get',
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body?.filter(u => u.userType !== 'PATIENT') || [];
      default:
        throw new UnexpectedError();
    }
  }
}

export namespace RemoteGetDoctors {
  export type Model = GetDoctors.Model;
}
