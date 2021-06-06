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

const BottomCard = styled.View<{ color?: string }>`
  background-color: ${props => props.color || '#fff'};
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  padding: 24px;
`;

function BottomDialog({
  children,
  onRequestClose,
  ...props
}: BottomDialogProps): JSX.Element {
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
        <BottomCard>{children}</BottomCard>
      </Container>
    </Modal>
  );
}

interface BottomDialogProps {
  children: JSX.Element;
  onRequestClose: () => void;
  props: ModalProps;
}

export default BottomDialog;
