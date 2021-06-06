import { UserModel } from './user-model';

export interface AuthenticationModel {
  user: UserModel;
  token: string;
}
