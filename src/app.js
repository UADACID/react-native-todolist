/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Lists from '../component/Lists'
import InputForm from '../component/InputForm'
import Button from '../component/Button'

export default class App extends Component {

  state = {
    text  :'',
    lists : [
      'list 1st',
      'list 2nd'
    ]
  }

  handleAddText(){
    const lists = [...this.state.lists]
    lists.push(this.state.text)
    this.setState({
        lists,
        text:''
      })
  }

  handleRemove = (index) => {
    const lists = [...this.state.lists].filter((list,indexList)=>{
      return indexList != index
    })
    this.setState({
      lists
    })
  }

  handleSetText = (text) => {
    this.setState({
      text
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Todo List :</Text>
        <InputForm
          onChangeText={(text)=>this.handleSetText(text)}
          value={this.state.text}
        />
        <Button onPress={()=>this.handleAddText()}/>
        <Lists lists={this.state.lists} onPress={this.handleRemove}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#FFFFFF'
  },
});
