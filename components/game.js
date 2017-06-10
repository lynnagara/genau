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

export default class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      question: "Scharf",
      answers: ["Sharp", "Difficult", "Funny", "Amusing"],
      correctAnswerIndex: 0
    };

    this.answerSelectedFunctions = this.state.answers.map((value, index) => this.answerSelected.bind(this, index));
  }

  answerSelected(index) {
    if (index === this.state.correctAnswerIndex) {
      console.log('Correct!');
    } else {
      console.log('Incorrect!');
    }
  }

  render() {
    const answersButtons = this.state.answers.map(function (value, index) {
      return (<Button title={ value } onPress={this.answerSelectedFunctions[index]} />);
    }, this);

    return (
      <View style={styles.container}>
        <Timer />
        <Text>{ this.state.question }</Text>

        {answersButtons}
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
