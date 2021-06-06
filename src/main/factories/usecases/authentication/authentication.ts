import { makeApiUrl, makeAxiosHttpClient } from '../../http';
import { Authentication } from '../../../../domain/usecases/authentication';
import { RemoteAuthentication } from '../../../../data/usecases/remote-authentication';

export const makeRemoteAuthentication = (): Authentication =>
  new RemoteAuthentication(makeApiUrl('/auth'), makeAxiosHttpClient());
