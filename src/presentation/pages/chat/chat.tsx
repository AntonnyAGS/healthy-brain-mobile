/* eslint-disable react/state-in-constructor */
/* eslint-disable react/sort-comp */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// @flow
import React from 'react';
import { GiftedChat, IMessage } from 'react-native-gifted-chat'; // 0.3.0
import { SafeAreaView } from 'react-native-safe-area-context';

import styled from 'styled-components/native';
import Fire from '../../../data/usecases/remote-firebase';
import { font } from '../../theme/text';

type Props = {
  name?: string;
};

const Title = styled.Text`
  font-size: 18px;

  font-family: ${font.bold};
`;

const Container = styled.View`
  align-items: center;
`;

const Description = styled.Text`
  font-size: 16px;
  font-family: ${font.medium};
`;

class Chat extends React.Component<Props> {
  static navigationOptions = ({ navigation }) => ({
    title: (navigation.state.params || {}).name || 'Chat!',
  });

  state = {
    messages: [],
  };

  // eslint-disable-next-line class-methods-use-this
  get user() {
    return {
      // eslint-disable-next-line react/destructuring-assignment
      name: 'oi',
      _id: Fire.shared.uid,
    };
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Container>
          <Title>Novo chat</Title>
          <Description>Algum profissional disponível te responderá</Description>
        </Container>
        <GiftedChat
          // eslint-disable-next-line react/destructuring-assignment
          messages={this.state.messages}
          onSend={Fire.shared.send}
          user={this.user}
          placeholder="Digite aqui..."
        />
      </SafeAreaView>
    );
  }

  componentDidMount() {
    Fire.shared.on((message: IMessage[]) =>
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, message),
      })),
    );
  }

  componentWillUnmount() {
    Fire.shared.off();
  }
}

export default Chat;
