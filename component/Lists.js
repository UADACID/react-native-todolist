/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';
import List from './List'

const Lists = (props) => (
  <ScrollView style={styles.container}>
    {props.lists.map((list,index)=>{
      return (
          <List key={index} list={list} onPress={props.onPress} index={index}/>
      )
    })}
  </ScrollView>
);

export default Lists;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft:2,
    paddingRight:2
  },
});
