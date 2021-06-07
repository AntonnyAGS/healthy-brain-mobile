import React from 'react';

import { Main } from '../../../../presentation/pages';

import Feed from '../feed/feed-factory';

export default function makeMain(): JSX.Element {
  return <Main Feed={Feed} />;
}
