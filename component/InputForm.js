/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';

const InputForm = (props) => (
  <View style={props.style}>
    <TextInput
      onChangeText={(text)=>props.onChangeText(text)}
      value={props.value}
      placeholder={props.placeholder}
    />
  </View>
);

export default InputForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
