import { Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CustomTextInput } from '../../components';

export default function Login(): JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View>
        <CustomTextInput />
        <Text>Olá, dsds</Text>
      </View>
    </SafeAreaView>
  );
}
