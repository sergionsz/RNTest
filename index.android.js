/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Home from './Home';
import TakePhoto from './TakePhoto';

class RNTest extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ name: 'Home' }}
        renderScene={this.renderScene} />
    );
  }

  renderScene(route, navigator) {
    if (route.name === 'Home') {
      return <Home navigator={navigator} />;
    }
    if (route.name === 'TakePhoto') {
      return <TakePhoto navigator={navigator} route={route}/>;
    }
  }
}

AppRegistry.registerComponent('RNTest', () => RNTest);
