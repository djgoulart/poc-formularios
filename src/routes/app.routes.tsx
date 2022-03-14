import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { Form } from '../screens/Form';
import { Home } from '../screens/Home';

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{ headerShown: false }}
    >
      <Screen
        name='Home'
        component={Home}
      />
      <Screen
        name='Form'
        component={Form}
      />
    </Navigator>
  );
}
