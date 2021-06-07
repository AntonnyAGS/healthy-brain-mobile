import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { DrawerNavigationProp } from '@react-navigation/drawer';
import { Feed } from '../../../../presentation/pages';
import { MainScreenParamList } from '../../../routes/main-router';
import { makeRemoteGetDoctors } from '../../usecases/get-doctors/get-doctors';
import { makeRemoteCreateConsult } from '../../usecases/create-consult/create-consult';

export default function makeFeed(): JSX.Element {
  const navigator = () =>
    useNavigation<DrawerNavigationProp<MainScreenParamList, 'Feed'>>();

  return (
    <Feed
      useNavigation={navigator}
      loadDoctors={makeRemoteGetDoctors()}
      createConsult={makeRemoteCreateConsult()}
    />
  );
}
