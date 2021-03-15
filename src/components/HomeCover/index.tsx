import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';

import styled from 'styled-components/native';

import { blue } from '../../theme/colors';
import { font } from '../../theme/text';

const Container = styled.View`
  background: ${blue['300']};
  height: 100%;
  padding: 32px;
`;

const Title = styled.Text`
  font-family: ${font['thin']};
  color: ${blue['500']};
  text-transform: uppercase;
  font-size: 18px;
`;

const Description = styled.Text`
  font-family: ${font['semibold']};
  color: ${blue['500']};
  text-transform: uppercase;
  font-size: 26px;
`;

interface Props {
  text: string;
  imageUrl: string;
}

export function HomeCover(props: Props) {
  return (
    <Container>
      <Title>
        Bem vindo a nossa
      </Title>
      <Description>
        plataforma
      </Description>
    </Container>
  ) ;
}

