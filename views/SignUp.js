import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar
} from 'react-native';

export default class SignUp extends Component {

  constructor(Props) {
    super(Props);

    this.state = { };
  }

  render() {
    return (
      <View style={styles.container}>

        <Text>SignUp!</Text>

      </View>
    );
  }

} // end of HelloWordApp class

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '#FCFCFC',
  }
});