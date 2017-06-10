import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import Timer from './timer';
import Card from './card';
import Score from './score';

export default class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentScore: 0,
      card: {
        question: 'Scharf',
        answers: ['Sharp', 'Difficult', 'Funny', 'Amusing'],
        correctAnswerIndex: 0
      }
    };

    this.handleAnswer = this.handleAnswer.bind(this);
  }

  handleAnswer (isCorrect) {
    console.log('get the next card', isCorrect);

    if (isCorrect) {
      this.setState({
        currentScore: this.state.currentScore + 1
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Score value={this.state.currentScore} />
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
