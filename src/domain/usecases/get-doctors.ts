/* eslint-disable @typescript-eslint/no-namespace */
import { UserModel } from '../models/user-model';

export interface GetDoctors {
  getAll: () => Promise<GetDoctors.Model[]>;
}

export namespace GetDoctors {
  export type Model = UserModel;
}
