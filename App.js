import React, {Component} from 'react';
import {Button,View,Text} from 'react-native';

export class GreenButton extends Component{
  render(){
    return(
      <Button color="green" title="Click Me"></Button>
    )
  }
}

export default class App extends Component{
  render() {
    return(
      <View style={{marginTop: 400, width: "100%"}}>
      <GreenButton/>
      <Text>My First React Component</Text>
      </View>
    );
  }
}