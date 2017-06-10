import React, { Component } from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';
import AnswerButton from './answerButton';

export default class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      answerSelected: ''
    };
  }

  answerSelected(answer) {
    const isCorrect = answer === this.props.card.answer;

    this.setState({
      answerSelected: answer
    });

    this.props.onAnswerSelected(isCorrect);
  }

  getButtonState(answer) {
    const isSelected = this.state.answerSelected === answer;
    const isCorrect = this.props.card.answer === answer;

    if (!isSelected) {
      return 'default'
    }

    return isCorrect ? 'correct' : 'incorrect';
  }

  render() {

    const answersButtons = this.props.card.allAnswers.map(value => {
      return (
        <AnswerButton
          key={value}
          title={value}
          state={this.getButtonState(value)}
          onPress={() => this.answerSelected(value)} />
        );
    });

    return (
      <View>
        <Text>{ this.props.card.question }</Text>
        {answersButtons}
      </View>
    );
  }
}
