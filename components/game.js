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
import CardGenerator from '../CardGenerator';

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.cardGenerator = CardGenerator();

    this.state = {
      currentScore: 0,
      currentCard: this.cardGenerator.next()
    };

    this.handleAnswer = this.handleAnswer.bind(this);

  }

  handleAnswer (isCorrect) {
    if (isCorrect) {
      this.setState({
        currentScore: this.state.currentScore + 1,
        currentCard: this.cardGenerator.next()
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Score value={this.state.currentScore} />
        <Timer />
        <Card card={this.state.currentCard} onAnswerSelected={this.handleAnswer} />
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
