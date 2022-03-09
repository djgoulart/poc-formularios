import React from 'react';
import { ThemeProvider } from 'styled-components';
import AppLoading from 'expo-app-loading'

import GlobalContext from './src/contexts/global';

import {
  useFonts,
  Ubuntu_400Regular,
  Ubuntu_500Medium,
  Ubuntu_700Bold
} from '@expo-google-fonts/ubuntu';

import theme from './src/global/styles/theme';
import { Home } from './src/screens/Home';

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
        <Home />
      </ThemeProvider>
    </RealmProvider>
  );
}
