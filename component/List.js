/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

const List = (props) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={()=>props.onPress(props.index)}>
      <Text style={styles.text}>{props.list}</Text>
    </TouchableOpacity>
  </View>
);

export default List;

const styles = StyleSheet.create({
  container: {
    height:50,
    backgroundColor:'#c6c8ca',
    margin:2,
    alignItems:'center',
    justifyContent:'center',
    borderColor:'#9e9fa0',
    borderWidth:1,
    borderRadius:3
  },
  text:{
    color:'#FFFFFF'
  }
});
