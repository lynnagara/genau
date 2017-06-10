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

    const len = this.props.card.wrongAnswers.length;
    const insertPosition = Math.floor(Math.random() * (len + 1));
    const answers = this.props.card.wrongAnswers.slice();

    answers.splice(insertPosition, 0, this.props.card.answer);

    this.state = {
      answers,
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
    const answersButtons = this.state.answers.map(value => {
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
