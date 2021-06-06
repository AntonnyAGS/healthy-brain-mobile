import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/core';
import { KeyboardAvoidingView, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CustomTextInput, Button, Spacer } from '../../components';
import { grey } from '../../theme/colors';
import { font } from '../../theme/text';

import { Authentication } from '../../../domain/usecases/authentication';

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
  padding: 24px;

  justify-content: center;
  flex: 1;
`;

export default function Login({ auth }: LoginProps): JSX.Element {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleAuth = async () => {
    setLoading(true);
    try {
      const result = await auth.auth({
        email,
        password,
      });

      AsyncStorage.setItem('token', result.token);

      navigation.navigate('Main');
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <Container>
          <Icon name="arrow-left" size={26} onPress={handleBack} />
          <Spacer />
          <Title>Login</Title>
          <CustomTextInput
            value={email}
            onChangeText={setEmail}
            icon="mail"
            placeholder="Email"
            placeHolderTextColor="black"
            containerStyle={{
              backgroundColor: grey['300'],
              marginTop: 16,
            }}
          />
          <CustomTextInput
            value={password}
            onChangeText={setPassword}
            icon="lock"
            placeholder="Senha"
            secureTextEntry
            placeHolderTextColor="black"
            containerStyle={{
              backgroundColor: grey['300'],
              marginTop: 16,
              marginBottom: 16,
            }}
          />
          <Button onPress={handleAuth} disabled={loading}>
            <ButtonTitle>Entrar</ButtonTitle>
          </Button>
          <Spacer />
        </Container>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

interface LoginProps {
  auth: Authentication;
}
