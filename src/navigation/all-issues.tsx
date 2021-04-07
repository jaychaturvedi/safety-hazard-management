import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//Register
import AllIssuesScreen from '../screens/all-issues/index';

/**
 * All props definiton goes here
 */
export type AllIssuesParamList = {
  Raise: {};
};

const Raise = createStackNavigator<AllIssuesParamList>();

//Define all your stack here
export default function AllIssues() {
  return (
    <Raise.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
      }}
      // mode="modal"
    >
      <Raise.Screen name="Raise" component={AllIssuesScreen} />
    </Raise.Navigator>
  );
}
