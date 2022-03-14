import React from 'react';
import { LogBox } from 'react-native';
import { ThemeProvider } from 'styled-components';
import AppLoading from 'expo-app-loading'

import {
  useFonts,
  Ubuntu_400Regular,
  Ubuntu_500Medium,
  Ubuntu_700Bold
} from '@expo-google-fonts/ubuntu';

import GlobalContext from './src/contexts/global';
import theme from './src/global/styles/theme';
import { Routes } from './src/routes';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

const { RealmProvider } = GlobalContext;

export default function App() {
  const [fontsLoaded] = useFonts({
    Ubuntu_400Regular,
    Ubuntu_500Medium,
    Ubuntu_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  if (!RealmProvider) {
    return null;
  }

  return (
    <RealmProvider>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </RealmProvider>
  );
}
