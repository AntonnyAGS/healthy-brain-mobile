import React from 'react';

import { Main } from '../../../../presentation/pages';

import Feed from '../feed/feed-factory';
import Consults from '../consults/consults-factory';

export default function makeMain(): JSX.Element {
  return <Main Feed={Feed} Consults={Consults} />;
}
