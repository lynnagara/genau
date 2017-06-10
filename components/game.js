import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import Timer from './timer';
import Card from './card';

export default class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      card: {
        question: 'Scharf',
        answers: ['Sharp', 'Difficult', 'Funny', 'Amusing'],
        correctAnswerIndex: 0
      }
    }
  }

  handleAnswer (isCorrect) {
    console.log('get the next card', isCorrect)
  }

  render() {
    return (
      <View style={styles.container}>
        <Timer />
        <Card card={this.state.card} onAnswerSelected={this.handleAnswer} />
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
