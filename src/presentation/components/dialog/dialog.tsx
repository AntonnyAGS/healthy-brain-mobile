import React from 'react';
import styled from 'styled-components/native';
import {
  KeyboardAvoidingView,
  Modal,
  ModalProps,
  Platform,
} from 'react-native';

const Container = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

const Overlay = styled.TouchableOpacity`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: hsla(0, 0%, 0%, 0.1);
`;

function Dialog({ children, onRequestClose, ...props }: Dialog): JSX.Element {
  return (
    <Modal
      {...props}
      onRequestClose={onRequestClose}
      animated
      transparent
      animationType="slide"
    >
      <Container
        as={KeyboardAvoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <Overlay activeOpacity={1} onPress={onRequestClose} />
      </Container>
    </Modal>
  );
}

interface Dialog extends ModalProps {
  children: JSX.Element;
  onRequestClose: () => void;
}

export default Dialog;
