import React from 'react';
import { ImageBackground } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

import { useNavigation } from '@react-navigation/native';
import { blue } from '../../theme/colors';
import { font } from '../../theme/text';

import DoctorWithCrossedArms from '../../components/svg/doctor-with-crossed-arms';

import Button from '../../components/button/button';

const Container = styled.View`
  padding: 0 24px 44px 24px;

  flex: 1;
`;

const Card = styled.View`
  background: white;
  padding: 16px;

  border-radius: 15px;
  margin-top: -20px;
`;

const Title = styled.Text`
  font-size: 26px;
  text-transform: uppercase;
  text-align: center;

  font-family: ${font.bold};
`;

const Description = styled.Text`
  font-size: 18px;
  text-align: center;

  font-family: ${font.medium};

  margin-top: 16px;
`;

const SvgContainer = styled.View`
  flex: 1;
  flex-direction: column;
  align-self: center;
  justify-content: flex-end;
`;

const ButtonText = styled.Text`
  font-size: 18px;
  color: white;

  font-family: ${font.medium};
`;

export default function HomeSelector(): JSX.Element {
  const navigation = useNavigation();

  const handleNavigateToLogin = () => {
    navigation.navigate('Login');
  };

  const handleNavigateToCreateAccount = () => {
    navigation.navigate('CreateAccount');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: blue['300'] }}>
      <ImageBackground
        // eslint-disable-next-line global-require
        source={require('../../../../public/images/selector-background.png')}
        resizeMode="cover"
        style={{ flex: 1 }}
      >
        <Container>
          <SvgContainer>
            <DoctorWithCrossedArms />
          </SvgContainer>
          <Card>
            <Title>Healthy Brain</Title>
            <Description>
              Seja bem vindo a nossa plataforma de consultas online.
            </Description>
            <Button
              color={blue['350']}
              onPress={handleNavigateToLogin}
              style={{ marginTop: 16 }}
            >
              <ButtonText>Login</ButtonText>
            </Button>
            <Button
              style={{ marginTop: 16 }}
              onPress={handleNavigateToCreateAccount}
            >
              <ButtonText>Criar uma conta</ButtonText>
            </Button>
          </Card>
        </Container>
      </ImageBackground>
    </SafeAreaView>
  );
}
