import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import AppProvider from './src/context/'
import React from 'react';
import Routes from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <AppProvider>
        <Routes />      
        <StatusBar style="light" />
      </AppProvider>      
    </NavigationContainer>
  );
}