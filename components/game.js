/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import Timer from './timer';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Timer />
        <Text>Scharf</Text>
        <Button title="Hot">Hot</Button>
        <Button title="Difficult">Difficult</Button>
        <Button title="Funny">Funny</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
