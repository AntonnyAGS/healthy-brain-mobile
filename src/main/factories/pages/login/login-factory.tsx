import React from 'react';

import { Login } from '../../../../presentation/pages';

import { makeRemoteAuthentication } from '../../usecases/authentication/authentication';

export default function makeLogin(): JSX.Element {
  return <Login auth={makeRemoteAuthentication()} />;
}
