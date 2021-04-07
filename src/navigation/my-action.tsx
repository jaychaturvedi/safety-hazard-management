import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//Register
import MyActionsScreen from '../screens/my-actions/index';

/**
 * All props definiton goes here
 */
export type MyActionParamList = {
  MyActions: {};
};

const MyActions = createStackNavigator<MyActionParamList>();

//Define all your stack here
export default function MyAction() {
  return (
    <MyActions.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
      }}
      // mode="modal"
    >
      <MyActions.Screen name="MyActions" component={MyActionsScreen} />
    </MyActions.Navigator>
  );
}
