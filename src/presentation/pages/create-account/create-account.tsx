import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import { Button, CustomTextInput, Spacer } from '../../components';

import { grey } from '../../theme/colors';
import { font } from '../../theme/text';

const Container = styled.View`
  padding: 16px;

  justify-content: center;
  flex: 1;
`;

const Title = styled.Text`
  font-size: 26px;
  font-family: ${font.bold};
`;

const ButtonTitle = styled.Text`
  font-family: ${font.bold};
  font-size: 18px;

  color: white;
`;

const TermsText = styled.Text`
  font-family: ${font.medium};
  font-size: 16px;
`;

function CreateAccount(): JSX.Element {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <Icon
          name="arrow-left"
          size={26}
          style={{ marginTop: 16 }}
          onPress={handleBack}
        />
        <Spacer />
        <Title>Cadastro</Title>
        <CustomTextInput
          icon="user"
          placeholder="Nome completo"
          placeHolderTextColor="black"
          containerStyle={{ backgroundColor: grey['300'], marginTop: 16 }}
        />
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
          <ButtonTitle>Cadastrar</ButtonTitle>
        </Button>
        <Spacer />
        <TermsText>
          Ao criar uma conta ou fazer login você concorda nossos Termos de uso e
          nossa Política de privacidade.
        </TermsText>
      </Container>
    </SafeAreaView>
  );
}

export default CreateAccount;
