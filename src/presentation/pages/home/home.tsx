import React from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';

import { HomeStepper } from '../../components';

export default function Home(): JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HomeStepper />
    </SafeAreaView>
  );
}
