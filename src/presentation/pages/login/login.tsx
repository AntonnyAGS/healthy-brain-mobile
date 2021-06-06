import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/core';
import { CustomTextInput, Button, Spacer } from '../../components';
import { grey } from '../../theme/colors';
import { font } from '../../theme/text';

const Title = styled.Text`
  font-size: 26px;
  font-family: ${font.bold};
`;

const ButtonTitle = styled.Text`
  font-family: ${font.bold};
  font-size: 18px;

  color: white;
`;

const Container = styled.View`
  padding: 16px;

  justify-content: center;
  flex: 1;
`;

export default function Login(): JSX.Element {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <Container>
        <Icon
          name="arrow-left"
          size={26}
          style={{ marginTop: 16 }}
          onPress={handleBack}
        />
        <Spacer />
        <Title>Login</Title>
        <CustomTextInput
          icon="mail"
          placeholder="Email"
          placeHolderTextColor="black"
          containerStyle={{
            backgroundColor: grey['300'],
            marginTop: 16,
          }}
        />
        <CustomTextInput
          icon="lock"
          placeholder="Senha"
          placeHolderTextColor="black"
          containerStyle={{
            backgroundColor: grey['300'],
            marginTop: 16,
            marginBottom: 16,
          }}
        />
        <Button onPress={() => null}>
          <ButtonTitle>Entrar</ButtonTitle>
        </Button>
        <Spacer />
      </Container>
    </SafeAreaView>
  );
}
