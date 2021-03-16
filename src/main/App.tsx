import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { registerRootComponent } from 'expo';

import { loadAsync } from 'expo-font';

import { Login, Home } from './factories/pages'
import AppLoading from 'expo-app-loading';

const Stack = createStackNavigator();

function loadAssets() {
  try {
    return loadAsync({
      'Montserrat': require('../../public/fonts/Montserrat.ttf'),
      'Montserrat-Medium': require('../../public/fonts/Montserrat-Medium.ttf'),
      'Montserrat-SemiBold': require('../../public/fonts/Montserrat-SemiBold.ttf'),
      'Montserrat-Bold': require('../../public/fonts/Montserrat-Bold.ttf'),
      'Montserrat-Black': require('../../public/fonts/Montserrat-Black.ttf'),
      'Montserrat-Thin': require('../../public/fonts/Montserrat-Thin.ttf')
    });
  } catch (error) {
    return Promise.reject();
  }
} 
const screen = Dimensions.get('screen');
const window = Dimensions.get('window');

function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={ loadAssets }
        onFinish={ () => setFontsLoaded(true) }
        onError={ () => {} }
      />
    );
  }

  const obj = {
    teste: 'oi'
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

export default registerRootComponent(App);

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
