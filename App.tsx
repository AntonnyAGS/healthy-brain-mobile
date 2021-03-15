import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { loadAsync } from 'expo-font';

import { Login } from './src/pages/Login';
import { Home } from './src/pages/Home';

import AppLoading from 'expo-app-loading';

const Stack = createStackNavigator();

function loadAssets() {
  try {
    return loadAsync({
      'Montserrat': require('./assets/fonts/Montserrat.ttf'),
      'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.ttf'),
      'Montserrat-SemiBold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
      'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
      'Montserrat-Black': require('./assets/fonts/Montserrat-Black.ttf'),
      'Montserrat-Thin': require('./assets/fonts/Montserrat-Thin.ttf')
    });
  } catch (error) {
    return Promise.reject();
  }
} 
const screen = Dimensions.get('screen')
const window = Dimensions.get('window')

export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);

  console.log(screen, window)

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={ loadAssets }
        onFinish={ () => setFontsLoaded(true) }
        onError={ () => {} }
      />
    );
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Montserrat_100Thin',
    fontWeight: '200'
  },
});
