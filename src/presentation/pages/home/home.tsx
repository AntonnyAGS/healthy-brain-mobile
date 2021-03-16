import React from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';

import { HomeCover } from '../../components';

export default function Home(): JSX.Element {
  return (
    <SafeAreaView>
      <HomeCover
        imageUrl="ds"
        text="Conectamos os pacientes aos seus psicólogos, promovendo controle completo em todo tratamento proporcionando saúde e bem-estar para todos."
      />
    </SafeAreaView>
  );
}
