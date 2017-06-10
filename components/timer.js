import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class Timer extends Component {
  constructor(props) {
    super(props);
    const seconds = 120;
    this.state = {seconds};
    this.int = setInterval(() => {
      if (this.state.seconds > 0) {
        this.setState({seconds: this.state.seconds -= 1});
      } else {
        clearInterval(this.int);
      }
    }, 1000);
  }

  componentWillUnmount() {
    if (this.int) {
      clearInterval(this.int);
    }
  }

  render() {
    return (
      <View>
        <Text>{this.state.seconds}</Text>
      </View>
    );
  }
}
