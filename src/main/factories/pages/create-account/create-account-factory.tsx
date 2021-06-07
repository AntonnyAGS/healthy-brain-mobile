import React from 'react';

import { CreateAccount } from '../../../../presentation/pages';

import { makeRemoteCreateAccount } from '../../usecases/create-account/create-account';

export default function makeCreateAccount(): JSX.Element {
  return <CreateAccount create={makeRemoteCreateAccount()} />;
}
