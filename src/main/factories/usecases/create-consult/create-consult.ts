import { makeApiUrl, makeAxiosHttpClient } from '../../http';
import { CreateConsult } from '../../../../domain/usecases/create-consult';
import { RemoteCreateConsult } from '../../../../data/usecases/remote-create-consult';

export const makeRemoteCreateConsult = (): CreateConsult =>
  new RemoteCreateConsult(makeApiUrl('/consultation'), makeAxiosHttpClient());
