import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import { KeyboardAvoidingView, Platform } from 'react-native';
import { Button, CustomTextInput, Spacer } from '../../components';

import { grey } from '../../theme/colors';
import { font } from '../../theme/text';

import { CreateAccount as CreateAccountDomain } from '../../../domain/usecases/create-account';

const Container = styled.View`
  padding: 24px;

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

function CreateAccount({ create }: CreateAccountProps): JSX.Element {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);

  const handleCreateAccount = async () => {
    try {
      setLoading(true);

      await create.create({
        birthdayDate: new Date(),
        email,
        name,
        password,
        userType: 'PATIENT',
      });

      navigation.navigate('Login');
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <Container>
          <Icon name="arrow-left" size={26} onPress={handleBack} />
          <Spacer />
          <Title>Cadastro</Title>
          <CustomTextInput
            icon="user"
            placeholder="Nome completo"
            placeHolderTextColor="black"
            containerStyle={{ backgroundColor: grey['300'], marginTop: 16 }}
            value={name}
            onChangeText={setName}
          />
          <CustomTextInput
            icon="mail"
            placeholder="Email"
            placeHolderTextColor="black"
            value={email}
            onChangeText={setEmail}
            containerStyle={{
              backgroundColor: grey['300'],
              marginTop: 16,
            }}
          />
          <CustomTextInput
            icon="lock"
            placeholder="Senha"
            placeHolderTextColor="black"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            containerStyle={{
              backgroundColor: grey['300'],
              marginTop: 16,
              marginBottom: 16,
            }}
          />
          <Button onPress={handleCreateAccount} disabled={loading}>
            <ButtonTitle>Cadastrar</ButtonTitle>
          </Button>
          <Spacer />
          <TermsText>
            Ao criar uma conta ou fazer login você concorda nossos Termos de uso
            e nossa Política de privacidade.
          </TermsText>
        </Container>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

interface CreateAccountProps {
  create: CreateAccountDomain;
}

export default CreateAccount;
