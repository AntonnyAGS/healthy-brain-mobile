import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import { font } from '../../theme/text';

const Drawer = createDrawerNavigator();

export default function Main({ Feed }: MainProps): JSX.Element {
  return (
    <Drawer.Navigator
      initialRouteName="Feed"
      drawerContentOptions={{
        labelStyle: { fontSize: 16, fontFamily: font.medium },
      }}
    >
      <Drawer.Screen name="Feed" component={Feed} />
    </Drawer.Navigator>
  );
}

interface MainProps {
  Feed: React.ComponentType<unknown>;
}
