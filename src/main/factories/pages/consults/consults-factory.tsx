import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { DrawerNavigationProp } from '@react-navigation/drawer';
import { Consults } from '../../../../presentation/pages';
import { MainScreenParamList } from '../../../routes/main-router';
import { makeRemoteGetConsults } from '../../usecases/get-consults/get-consults';

export default function makeFeed(): JSX.Element {
  const navigator = () =>
    useNavigation<DrawerNavigationProp<MainScreenParamList, 'Consults'>>();

  return (
    <Consults
      useNavigation={navigator}
      loadConsults={makeRemoteGetConsults()}
    />
  );
}
