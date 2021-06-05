import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/Feather';
import { blue } from '../../theme/colors';
import { font } from '../../theme/text';
import Button from '../button/button';

const Container = styled.View`
  background: ${blue['300']};
  flex: 1;
  width: 100%;
  padding: 32px;
`;

const Title = styled.Text`
  font-family: ${font.regular};
  color: ${blue['500']};
  text-transform: uppercase;
  font-size: 18px;
  margin-top: 16px;
`;

const FeaturedTitle = styled.Text`
  font-family: ${font.semibold};
  color: ${blue['500']};
  text-transform: uppercase;
  font-size: 26px;
  margin-bottom: 16px;
`;

const Description = styled.Text`
  font-family: ${font.medium};
  font-size: 18px;
  color: ${blue['500']};
`;

const SvgContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-self: center;
  margin-bottom: 32px;
`;

const Spacer = styled.View`
  flex: 1;
`;

function HomeCover({
  children,
  text,
  showNextButton,
  onPressButton,
}: HomeCoverProps): JSX.Element {
  return (
    <Container>
      <SvgContainer>{children}</SvgContainer>
      <Title>Bem vindo a nossa</Title>
      <FeaturedTitle>plataforma</FeaturedTitle>
      {text ? <Description>{text}</Description> : null}
      {showNextButton && (
        <Button
          color={blue['400']}
          pressedColor={blue['500']}
          onPress={onPressButton}
          style={{ marginTop: 16 }}
        >
          <View style={{ flexDirection: 'row' }}>
            <Spacer />
            <Text
              style={{ fontSize: 18, color: 'white', fontFamily: font.medium }}
            >
              Continuar
            </Text>
            <Spacer />
            <Icon name="arrow-right" size={20} color="white" />
          </View>
        </Button>
      )}
    </Container>
  );
}

interface HomeCoverProps {
  text?: string;
  showNextButton: boolean;
  onPressButton: () => void;
  children?: JSX.Element;
}

HomeCover.defaultProps = {
  text: 'No text',
  children: null,
};

export default HomeCover;
