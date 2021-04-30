/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { store, persistor } from './store';
import { StatusBar } from 'react-native';
import { BaseColor } from '@config';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Navigation from './navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
 
export default class App extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    SplashScreen.hide();

    StatusBar.setBackgroundColor(BaseColor.primaryColor, true);
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SafeAreaProvider>
            <Navigation />
          </SafeAreaProvider>
        </PersistGate>
      </Provider>
    );
  }
}
