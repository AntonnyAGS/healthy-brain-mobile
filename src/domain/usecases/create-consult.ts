import { ConsultModel } from '../models/consult-model';

/* eslint-disable @typescript-eslint/no-namespace */
export interface CreateConsult {
  create: (params: CreateConsult.Params) => Promise<ConsultModel>;
}

export namespace CreateConsult {
  export type Params = {
    consultDateTime: Date;
    endDateTime: Date;
    healthProfessionalId: string;
  };

  export type Model = ConsultModel;
}
