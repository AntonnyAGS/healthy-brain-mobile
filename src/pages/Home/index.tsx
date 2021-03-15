import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { HomeCover } from '../../components/HomeCover'

export function Home(){
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <HomeCover
        imageUrl="ds" 
        text="Conectamos os pacientes aos seus psicólogos, promovendo controle completo em todo tratamento proporcionando saúde e bem-estar para todos." 
      />
    </SafeAreaView>
  );
}