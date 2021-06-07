import React from 'react';
import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/Feather';
import { TextInputProps, StyleProp, TextStyle, ViewStyle } from 'react-native';
import { grey } from '../../theme/colors';
import { font } from '../../theme/text';

const Container = styled.View`
  height: 56px;
  background-color: ${grey['200']};
  border-radius: 16px;
  padding: 8px 24px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Input = styled.TextInput`
  height: 100%;
  width: 100%;

  margin-left: 8px;
  font-family: ${font.medium};
  font-size: 16px;
`;

function CustomTextInput({
  icon,
  containerStyle,
  inputStyle,

  placeHolderTextColor,
  selectionColor,
  underlineColorAndroid,

  ...props
}: CustomTextInputProps): JSX.Element {
  return (
    <Container style={{ ...(containerStyle as Record<string, unknown>) }}>
      <Icon name={icon} size={20} />
      <Input
        {...props}
        style={{ ...(inputStyle as Record<string, unknown>) }}
        placeholderTextColor={placeHolderTextColor}
        selectionColor={selectionColor}
        underlineColorAndroid={underlineColorAndroid}
      />
    </Container>
  );
}

interface CustomTextInputProps extends TextInputProps {
  icon: string;
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;

  placeHolderTextColor?: string;
  selectionColor?: string;
  underlineColorAndroid?: string;
}

CustomTextInput.defaultProps = {
  containerStyle: {},
  inputStyle: {},
  placeHolderTextColor: null,
  selectionColor: null,
  underlineColorAndroid: null,
};

export default CustomTextInput;
