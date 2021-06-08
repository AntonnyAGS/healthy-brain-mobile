import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import { font } from '../../theme/text';

const Drawer = createDrawerNavigator();

export default function Main({ Feed, Consults, Chat }: MainProps): JSX.Element {
  return (
    <Drawer.Navigator
      initialRouteName="Feed"
      drawerContentOptions={{
        labelStyle: { fontSize: 16, fontFamily: font.medium },
      }}
    >
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Consultas" component={Consults} />
      <Drawer.Screen name="Chat" component={Chat} />
    </Drawer.Navigator>
  );
}

interface MainProps {
  Feed: React.ComponentType<unknown>;
  Consults: React.ComponentType<unknown>;
  Chat: React.ComponentType<unknown>;
}
