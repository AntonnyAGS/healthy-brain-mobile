/* eslint-disable @typescript-eslint/no-namespace */

import { AuthenticationModel } from '../models/authentication-model';

export interface Authentication {
  auth: (params: Authentication.Params) => Promise<Authentication.Model>;
}

export namespace Authentication {
  export type Params = {
    email: string;
    password: string;
  };

  export type Model = AuthenticationModel;
}
