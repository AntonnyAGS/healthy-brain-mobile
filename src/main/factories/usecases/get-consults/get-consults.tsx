import { makeApiUrl, makeAxiosHttpClient } from '../../http';
import { GetConsults } from '../../../../domain/usecases/get-consults';
import { RemoteGetConsults } from '../../../../data/usecases/remote-get-consults';

export const makeRemoteGetConsults = (): GetConsults =>
  new RemoteGetConsults(makeApiUrl('/consultations'), makeAxiosHttpClient());
