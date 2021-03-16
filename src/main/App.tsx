/* eslint-disable global-require */
import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { registerRootComponent } from 'expo';

import { loadAsync } from 'expo-font';

import AppLoading from 'expo-app-loading';
import { Login, Home } from './factories/pages';

const Stack = createStackNavigator();

function loadAssets() {
  try {
    return loadAsync({
      Montserrat: require('../../public/fonts/Montserrat.ttf'),
      'Montserrat-Medium': require('../../public/fonts/Montserrat-Medium.ttf'),
      'Montserrat-SemiBold': require('../../public/fonts/Montserrat-SemiBold.ttf'),
      'Montserrat-Bold': require('../../public/fonts/Montserrat-Bold.ttf'),
      'Montserrat-Black': require('../../public/fonts/Montserrat-Black.ttf'),
      'Montserrat-Thin': require('../../public/fonts/Montserrat-Thin.ttf'),
    });
  } catch (error) {
    return Promise.reject();
  }
}
function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={loadAssets}
        onFinish={() => setFontsLoaded(true)}
        onError={() => null}
      />
    );
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default registerRootComponent(App);
