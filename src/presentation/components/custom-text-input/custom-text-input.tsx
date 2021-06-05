import React from 'react';
import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/Feather';
import { grey } from '../../theme/colors';

const Container = styled.View`
  height: 56px;
  background-color: ${grey['200']};
  border-radius: 16px;
  padding: 16px;
`;

const Input = styled.TextInput`
  height: 100%;
  width: 100%;
`;

export default function CustomTextInput(): JSX.Element {
  return (
    <Container>
      <Input autoCompleteType="email" keyboardType="email-address" />
    </Container>
  );
}
