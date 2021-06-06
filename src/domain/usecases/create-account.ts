/* eslint-disable @typescript-eslint/no-namespace */
export interface CreateAccount {
  create: (params: CreateAccount.Params) => Promise<void>;
}

export namespace CreateAccount {
  export type Params = {
    name: string;
    email: string;
    password: string;
    birthdayDate: Date;
    userType: string;
  };

  export type Model = CreateAccount;
}
