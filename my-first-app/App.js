import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View> 
        <Text style={{marginTop:50,marginLeft:100,marginRight:20}}>Akshat Dwivedi</Text>
        <Red/>
      </View>   
    );
  }
}
class Red extends Component{
  render(){
    return(
    <Button title="Click Here" color = "red"></Button>
    )
}
}
