import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//Register
import RaiseScreen from '../screens/raise/raise-hazard';

/**
 * All props definiton goes here
 */
export type RaiseHazardStackParamList = {
  RaiseHazard: {};
};

const Raise = createStackNavigator<RaiseHazardStackParamList>();

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
      <Raise.Screen name="RaiseHazard" component={RaiseScreen} />
      {/* <Raise.Screen name="RaiseIncident" component={RaiseScreen} /> */}
    </Raise.Navigator>
  );
}
