import React from 'react';
import {
  Text,
  View,
} from 'react-native';

export default function Score({value}) {
  return (
    <View>
      <Text>{value}</Text>
    </View>
  );
}
