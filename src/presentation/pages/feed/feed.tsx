import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';

import Home from './home';
import DoctorScreen from './doctor';

import { GetDoctors } from '../../../domain/usecases/get-doctors';

const Stack = createStackNavigator();
export default function Feed({
  useNavigation,
  loadDoctors,
}: FeedProps): JSX.Element {
  const [doctors, setDoctors] = useState<GetDoctors.Model[]>([]);

  const handleLoadDoctor = async () => {
    try {
      const result = await loadDoctors.getAll();
      setDoctors(result);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    handleLoadDoctor();
  });

  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen name="Home" options={{ headerShown: false }}>
        {props => (
          <Home doctors={doctors} {...props} useNavigation={useNavigation} />
        )}
      </Stack.Screen>
      <Stack.Screen
        name="Doctor"
        options={{ headerShown: false }}
        component={DoctorScreen}
      />
    </Stack.Navigator>
  );
}
interface FeedProps {
  useNavigation: () => {
    toggleDrawer: () => void;
  };
  loadDoctors: GetDoctors;
}
