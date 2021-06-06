import { useNavigation, useRoute } from '@react-navigation/core';
import React from 'react';
import { ImageBackground, SafeAreaView, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import styled from 'styled-components/native';
import { Button, Spacer } from '../../components';
import { blue, grey } from '../../theme/colors';
import { font } from '../../theme/text';
import { Doctor } from '../../usecases/doctor';

const Container = styled.View`
  flex: 1;

  border-top-left-radius: 30px;
  border-top-right-radius: 30px;

  margin-top: -40px;
  background-color: white;

  padding: 24px;
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

const About = styled.Text`
  font-family: ${font.bold};
  font-size: 18px;

  margin-top: 32px;
`;

const AboutText = styled.Text`
  font-family: ${font.medium};
  font-size: 18px;

  margin-top: 8px;
`;

const Category = styled.Text`
  font-family: ${font.medium};
  font-size: 18px;
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
`;

export default function DoctorScreen(): JSX.Element {
  const navigation = useNavigation();
  const { params } = useRoute();

  const { doctor } = params as DoctorProps;

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <>
      <SafeAreaView style={{ flex: 0, backgroundColor: blue['450'] }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <ImageBackground
          // eslint-disable-next-line global-require
          source={require('../../../../public/images/doctors-in-room.png')}
          resizeMode="cover"
          style={{ height: 200 }}
        />
        <Container>
          <Header>
            <Icon
              name="arrow-left"
              size={26}
              onPress={handleBack}
              style={{ marginRight: 16 }}
            />
            <View>
              <Title>{doctor.name}</Title>
              <Category>{doctor.healthArea}</Category>
            </View>
          </Header>
          <About>Sobre o doutor</About>
          <AboutText>{doctor.description}</AboutText>

          <Button onPress={() => null} style={{ marginTop: 32 }}>
            <ButtonTitle>Solicitar consulta</ButtonTitle>
          </Button>
          <Spacer />
        </Container>
        {/* <Container>
        <Icon name="arrow-left" size={26} onPress={handleBack} />
        <Spacer />
        <Title>{doctor.name}</Title>
        <Button onPress={() => null}>
          <ButtonTitle>Cadastrar</ButtonTitle>
        </Button>
        <Spacer />
      </Container> */}
      </SafeAreaView>
    </>
  );
}

interface DoctorProps {
  doctor: Doctor;
}
