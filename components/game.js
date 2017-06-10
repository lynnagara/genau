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
      score: {
        right: 0,
        wrong: 0
      },
      currentCard: this.cardGenerator.next(),
    };

    this.handleAnswer = this.handleAnswer.bind(this);
  }

  handleAnswer(isCorrect) {
    const newScore = {
      right: this.state.score.right,
      wrong: this.state.score.wrong
    };

    if (isCorrect) {
      newScore.right++;
    } else {
      newScore.wrong++;
    }

   this.setState({
     score: newScore
    });

    // The transition to the next card needs to have a delay so the user can see if their answer is correct.
    setTimeout(() => {
      this.setState({currentCard: this.cardGenerator.next()});
    }, 300);
  }

  render() {
    const stateScore = this.state.score;
    const score = stateScore.right - stateScore.wrong;

    return (
      <View style={styles.container}>
        <Score value={score} />
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
