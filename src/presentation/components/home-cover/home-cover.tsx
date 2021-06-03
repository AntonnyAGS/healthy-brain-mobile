import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

import { blue } from '../../theme/colors';
import { font } from '../../theme/text';

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

const Button = styled.Pressable`
  height: 56px;
  align-items: center;
  justify-content: center;

  margin-top: 20px;
  border-radius: 15px;
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
          style={({ pressed }) => [
            { backgroundColor: pressed ? blue['500'] : blue['400'] },
          ]}
          onPress={onPressButton}
        >
          <Text style={{ fontSize: 18, color: 'white' }}>Continuar</Text>
        </Button>
      )}
    </Container>
  );
}

interface HomeCoverProps {
  text?: string;
  showNextButton: boolean;
  onPressButton?: () => void;
  children?: JSX.Element;
}

HomeCover.defaultProps = {
  text: 'No text',
  children: null,
  onPressButton: () => ({}),
};

export default HomeCover;
