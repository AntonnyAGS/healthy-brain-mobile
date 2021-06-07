import React from 'react';
import styled from 'styled-components/native';
import { PressableProps } from 'react-native';
import { blue } from '../../theme/colors';

const PressableButton = styled.Pressable`
  height: 56px;
  align-items: center;
  justify-content: center;

  flex-direction: row;

  border-radius: 15px;
  padding: 0 16px;
`;

function Button({
  onPress,
  pressedColor,
  children,
  color,
  style,
}: CustomProps): JSX.Element {
  return (
    <PressableButton
      style={({ pressed }) => [
        { backgroundColor: pressed ? pressedColor : color },
        { ...(style as Record<string, unknown>) },
      ]}
      onPress={onPress}
    >
      {children}
    </PressableButton>
  );
}

interface CustomProps extends PressableProps {
  color?: string;
  pressedColor?: string;
  onPress: () => void;
  children?: JSX.Element;
}

Button.defaultProps = {
  color: blue['400'],
  pressedColor: blue['500'],
  children: null,
};

export default Button;
