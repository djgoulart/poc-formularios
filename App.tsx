import React, { useState } from 'react';
import { Realm } from '@realm/react';
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
import { SignIn } from './src/screens/SignIn';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

interface FormData {
  [name: string]: any
}

const APP_ID = 'poc-zifqi';
const realmApp = new Realm.App({ id: APP_ID });

export default function App() {
  const [fontsLoaded] = useFonts({
    Ubuntu_400Regular,
    Ubuntu_500Medium,
    Ubuntu_700Bold
  });

  const { RealmProvider } = GlobalContext;
  const [user, setUser] = useState<Realm.User | null>(realmApp.currentUser);
  const [loginError, setLoginError] = useState(false);


  const handleSignIn = async ({ email, password }: FormData) => {
    setLoginError(false);
    const credentials = Realm.Credentials.emailPassword(email, password);

    console.log(email, password);

    try {
      setUser(await realmApp.logIn(credentials));
    } catch (error) {
      setLoginError(true);
      console.log('Login error:', error);
    }
  };

  const handleSignOut = () => {
    setUser(null);
    realmApp.currentUser?.logOut();
  }

  if (!fontsLoaded) {
    return <AppLoading />
  }


  if (!user || !realmApp.currentUser) {
    console.log("not signed")
    return (<SignIn onSignIn={handleSignIn} />);
  }

  return (
    <RealmProvider sync={{ user, partitionValue: realmApp.currentUser.id }}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </RealmProvider>
  );
}
