import React, { Component } from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';

export default class Card extends Component {
  constructor(props) {
    super(props);

    this.answerSelectedFunctions = this.props.card.answers
      .map((value, index) => this.answerSelected.bind(this, index));
  }

  answerSelected(index) {
    this.props.onAnswerSelected(index === this.props.card.correctAnswerIndex);
  }

  render() {
    const answersButtons = this.props.card.answers.map((value, index) => {
      return (<Button key={value} title={value} onPress={this.answerSelectedFunctions[index]} />);
    });
    return (
      <View>
        <Text>{ this.props.card.question }</Text>
        {answersButtons}
      </View>
    );
  }
}
