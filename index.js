/**
 * @format
 */
import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { NavigationContainer } from '@react-navigation/native';
class SafetyQube extends React.Component {
  render() {

    return (
      <NavigationContainer>
        <App />
      </NavigationContainer>
    );
  }
}
AppRegistry.registerComponent(appName, () => SafetyQube);
