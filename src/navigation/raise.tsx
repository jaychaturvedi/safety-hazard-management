import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//Register
import RaiseScreen from '../screens/raise/index';

/**
 * All props definiton goes here
 */
export type RaiseStackParamList = {
  Raise: {};
};

const Raise = createStackNavigator<RaiseStackParamList>();

//Define all your stack here
export default function RaiseStack() {
  return (
    <Raise.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
      }}
      // mode="modal"
    >
      <Raise.Screen name="Raise" component={RaiseScreen} />
    </Raise.Navigator>
  );
}
