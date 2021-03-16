import React from 'react';
import { Text } from 'react-native';

import styled from 'styled-components/native';

import { blue } from '../../theme/colors';
import { font } from '../../theme/text';

const Container = styled.View`
  background: ${blue['300']};
  height: 100%;
  padding: 32px;
`;

const Title = styled.Text`
  font-family: ${font.regular};
  color: ${blue['500']};
  text-transform: uppercase;
  font-size: 18px;
`;

const Description = styled.Text`
  font-family: ${font.semibold};
  color: ${blue['500']};
  text-transform: uppercase;
  font-size: 26px;
`;

function HomeCover({ imageUrl, text }: HomeCoverProps): JSX.Element {
  return (
    <Container>
      <Title>Bem vindo a nossa</Title>
      <Description>plataforma</Description>
      {text ? <Text>{text}</Text> : null}
      {imageUrl ? <Text>{imageUrl}</Text> : null}
    </Container>
  );
}
interface HomeCoverProps {
  text?: string;
  imageUrl?: string;
}

HomeCover.defaultProps = {
  text: 'No text',
  imageUrl: 'ds',
};

export default HomeCover;
