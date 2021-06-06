import React from 'react';
import styled from 'styled-components/native';
import { StyleProp, ViewStyle } from 'react-native';
import { Doctor } from '../../usecases/doctor';

import { grey } from '../../theme/colors';
import { font } from '../../theme/text';

const Title = styled.Text`
  font-family: ${font.bold};

  font-size: 18px;
`;

const Container = styled.View`
  background-color: ${grey['200']};
  height: 100px;

  padding: 16px;

  border-radius: 15px;
`;

const Description = styled.Text`
  font-size: 16px;
  font-family: ${font.medium};
`;

export default function DoctorCard({
  doctor,
  containerStyle,
}: DoctorCardProps): JSX.Element {
  return (
    <Container style={{ ...(containerStyle as Record<string, unknown>) }}>
      <Title>{doctor.name}</Title>
      <Description>{doctor.category}</Description>
    </Container>
  );
}

interface DoctorCardProps {
  doctor: Doctor;

  containerStyle?: StyleProp<ViewStyle>;
}

DoctorCard.defaultProps = {
  containerStyle: null,
};
