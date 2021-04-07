import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//Register
import MenuScreen from '../screens/menu/index';

/**
 * All props definiton goes here
 */
export type MenuStackParamList = {
  Menu: {};
};

const Menu = createStackNavigator<MenuStackParamList>();

//Define all your stack here
export default function MenuStack() {
  return (
    <Menu.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
      }}
      // mode="modal"
    >
      <Menu.Screen name="Menu" component={MenuScreen} />
    </Menu.Navigator>
  );
}
