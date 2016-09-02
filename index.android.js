/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  AppRegistry,
  Navigator,
} from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import Home from './Home';
import TakePhoto from './TakePhoto';

function renderScene(route, navigator) {
  switch (route.name) {
    case 'Home':
      return <Home navigator={navigator} />;
    case 'TakePhoto':
      return <TakePhoto navigator={navigator} route={route} />;
    default:
      return null;
  }
}

const RNTest = () => (
  /**
   * Provider from react-redux makes it possible for all the application to have
   * access to the store.
   */
  <Provider store={createStore(reducer)}>
    <Navigator
      initialRoute={{ name: 'Home' }}
      renderScene={renderScene}
    />
  </Provider>
);

AppRegistry.registerComponent('RNTest', () => RNTest);
