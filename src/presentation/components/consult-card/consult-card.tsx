import React from 'react';
import styled from 'styled-components/native';
import { StyleProp, View, ViewStyle } from 'react-native';
import dayjs from 'dayjs';
import { Consult } from '../../usecases/consult';

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

export default function ConsultCard({
  consult,
  name,
  containerStyle,
}: ConsultCardProps): JSX.Element {
  return (
    <Container style={{ ...(containerStyle as Record<string, unknown>) }}>
      <View>
        <Title>{name}</Title>
        <Description>
          {dayjs(consult.consultDateTime).format('DD / MM / YYYY')} |{' '}
          {dayjs(consult.consultDateTime).format('HH:mm')} -{' '}
          {dayjs(consult.endDateTime).format('HH:mm')}
        </Description>
      </View>
    </Container>
  );
}

interface ConsultCardProps {
  consult: Consult;
  name: string;

  containerStyle?: StyleProp<ViewStyle>;
}

ConsultCard.defaultProps = {
  containerStyle: null,
};
