import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import Home from './home';

import { GetDoctors } from '../../../domain/usecases/get-doctors';

const Stack = createStackNavigator();
export default function Feed({
  useNavigation,
  loadDoctors,
}: FeedProps): JSX.Element {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen name="Home" options={{ headerShown: false }}>
        {props => <Home {...props} useNavigation={useNavigation} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
interface FeedProps {
  useNavigation: () => {
    toggleDrawer: () => void;
  };
  loadDoctors: GetDoctors;
}
