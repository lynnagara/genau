import React, { Component } from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';

export default class Card extends Component {
  constructor(props) {
    super(props);

    const len = this.props.card.wrongAnswers.length;
    const insertPosition = Math.floor(Math.random() * (len + 1));
    const answers = this.props.card.wrongAnswers.slice()

    answers.splice(insertPosition, 0, this.props.card.answer);

    this.state = {answers};
  }

  answerSelected(answer) {
    this.props.onAnswerSelected(answer === this.props.card.answer);
  }

  render() {
    const answersButtons = this.state.answers.map(value => {
      return (
        <Button
          key={value}
          title={value}
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
