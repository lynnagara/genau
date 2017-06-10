import React, { Component } from 'react';
import {
  StyleSheet,
  Button,
  View
} from 'react-native';
import PropTypes from 'prop-types';

class AnswerButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {state, ...buttonProps} = this.props;

    const buttonColor = state !== 'default' ? 'white' : 'black';

    return (
      <View style={viewStyles[state]}>
        <Button color={buttonColor} {...buttonProps}/>
      </View>
    );
  }
}

const viewStyles = StyleSheet.create({
  default: {
  },
  correct: {
    backgroundColor: 'green'
  },
  incorrect: {
    backgroundColor: 'red'
  }
});

const buttonStyles = StyleSheet.create({
  default: {
  },
  correct: {
    color: '#FFFFFF'
  },
  incorrect: {
    color: 'white'
  }
});

AnswerButton.propTypes = {
  state: PropTypes.oneOf(['default', 'correct',  'incorrect'])
};

AnswerButton.defaultProps = {
  state: 'default'
};

export default AnswerButton;
