/**
 * @format
 */
import React from 'react';
import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import App from './app/index';

function HeadlessCheck({ isHeadless }) {
  if (isHeadless) {
    // App has been launched in the background by iOS, ignore
    return null;
  }

  return <App />;
}
AppRegistry.registerComponent('AlfaPixel', () => HeadlessCheck);
