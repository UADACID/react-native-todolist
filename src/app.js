/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  Platform,
  TouchableOpacity,
} from 'react-native';
import Lists from '../component/Lists'
import InputForm from '../component/InputForm'
import Button from '../component/Button'

const {height,width} = Dimensions.get('window')

export default class App extends Component {
  /*inisiasi variabel state */
  state = {
    text  :'',
    lists : [
      'list 1st',
      'list 2nd'
    ]
  }

  /*membuat method untuk aksi menambah task */
  handleAddTask(){
    if (this.state.text == '') {
      return;
    }
    const lists = [...this.state.lists]
    lists.push(this.state.text)
    this.setState({
        lists,
        text:''
      })
  }

  /*membuat method untuk aksi menghapus task dengan parameter index */
  handleRemove = (index) => {
    const lists = [...this.state.lists].filter((list,indexList)=>{
      return indexList != index
    })
    this.setState({
      lists
    })
  }

  /*membuat method untuk aksi mengisi nilai dari state 'text' */
  handleSetText = (text) => {
    this.setState({
      text
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Todo List :</Text>
        <View style={styles.InputContainer}>
          <InputForm
            style={styles.form}
            onChangeText={(text)=>this.handleSetText(text)}
            value={this.state.text}
            placeholder='type new task here . . . '
          />
          <Button onPress={()=>this.handleAddTask()}/>
        </View>
        <Lists lists={this.state.lists} onPress={this.handleRemove}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#FFFFFF',
    marginTop:Platform.OS == 'ios' ? 20 : 0,
  },
  text:{
    alignSelf:'center',
    fontSize:30,
    fontWeight:'bold'
  },
  InputContainer:{
    flexDirection:'row',
    marginBottom:20
  },
  form:{
    width:width-70,
    borderWidth:Platform.OS == 'ios' ? 1 : 0,
    margin:5,
    borderRadius:5,
    borderColor:'gray'
  }
});
