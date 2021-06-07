import { makeApiUrl, makeAxiosHttpClient } from '../../http';
import { CreateAccount } from '../../../../domain/usecases/create-account';
import { RemoteCreateAccount } from '../../../../data/usecases/remote-create-account';

export const makeRemoteCreateAccount = (): CreateAccount =>
  new RemoteCreateAccount(makeApiUrl('/users'), makeAxiosHttpClient());
