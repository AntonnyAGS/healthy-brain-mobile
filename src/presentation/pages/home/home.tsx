import React from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';

import { HomeStepper } from '../../components';

import { blue } from '../../theme/colors';

export default function Home(): JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: blue['300'] }}>
      <HomeStepper />
    </SafeAreaView>
  );
}
