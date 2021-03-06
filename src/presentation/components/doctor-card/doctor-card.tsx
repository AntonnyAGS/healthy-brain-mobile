import React from 'react';
import styled from 'styled-components/native';
import { StyleProp, View, ViewStyle } from 'react-native';
import { Doctor } from '../../usecases/doctor';

import { grey } from '../../theme/colors';
import { font } from '../../theme/text';

const Title = styled.Text`
  font-family: ${font.bold};

  font-size: 18px;
`;

const Container = styled.Pressable`
  background-color: ${grey['200']};
  height: 100px;

  padding: 16px;

  flex-direction: row;

  border-radius: 15px;
`;

const Description = styled.Text`
  font-size: 16px;
  font-family: ${font.medium};
`;

const SvgContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-self: center;
  margin-bottom: 32px;
`;

export default function DoctorCard({
  doctor,
  containerStyle,
  onPress,
}: DoctorCardProps): JSX.Element {
  return (
    <Container
      style={{ ...(containerStyle as Record<string, unknown>) }}
      onPress={() => onPress(doctor)}
    >
      <View>
        <Title>{doctor.name}</Title>
        <Description>{doctor.healthArea}</Description>
      </View>
    </Container>
  );
}

interface DoctorCardProps {
  doctor: Doctor;

  onPress: (doctor: Doctor) => void;

  containerStyle?: StyleProp<ViewStyle>;
}

DoctorCard.defaultProps = {
  containerStyle: null,
};
