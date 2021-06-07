/* eslint-disable @typescript-eslint/no-namespace */
import { ConsultModel } from '../models/consult-model';

export interface GetConsults {
  getAll: () => Promise<GetConsults.Model[]>;
}

export namespace GetConsults {
  export type Model = ConsultModel;
}
