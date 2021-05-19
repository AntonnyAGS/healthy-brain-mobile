import React from 'react';
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

function HomeCover({ children, text }: HomeCoverProps): JSX.Element {
  return (
    <Container>
      <SvgContainer>{children}</SvgContainer>
      <Title>Bem vindo a nossa</Title>
      <FeaturedTitle>plataforma</FeaturedTitle>
      {text ? <Description>{text}</Description> : null}
    </Container>
  );
}

interface HomeCoverProps {
  text?: string;
  children?: JSX.Element;
}

HomeCover.defaultProps = {
  text: 'No text',
  children: null,
};

export default HomeCover;
