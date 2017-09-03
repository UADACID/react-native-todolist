/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

const Button = (props) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={props.onPress}>
      <Text style={styles.text}>Add</Text>
    </TouchableOpacity>
  </View>
);

export default Button;

const styles = StyleSheet.create({
  container: {
    height:50,
    width:50,
    borderRadius:25,
    backgroundColor:'#3b5998',
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    color:'#FFFFFF'
  }
});
