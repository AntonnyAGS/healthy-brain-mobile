import { makeApiUrl, makeAxiosHttpClient } from '../../http';
import { GetDoctors } from '../../../../domain/usecases/get-doctors';
import { RemoteGetDoctors } from '../../../../data/usecases/remote-get-doctors';

export const makeRemoteGetDoctors = (): GetDoctors =>
  new RemoteGetDoctors(makeApiUrl('/users'), makeAxiosHttpClient());
