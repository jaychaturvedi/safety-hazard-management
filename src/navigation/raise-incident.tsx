import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//Register
import RaiseScreen from '../screens/raise/raise-incident';

/**
 * All props definiton goes here
 */
export type RaiseIncidentStackParamList = {
  RaiseIncident: {};
};

const Raise = createStackNavigator<RaiseIncidentStackParamList>();

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
      <Raise.Screen name="RaiseIncident" component={RaiseScreen} />
    </Raise.Navigator>
  );
}
