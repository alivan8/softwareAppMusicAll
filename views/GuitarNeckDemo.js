import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import GuitarNeck from './components/GuitarNeck';

export default class GuitarNeckDemo extends Component {

  // opciones para personalizar la navegación (ej: titulo en ActionBar)
  static navigationOptions = {
    title: 'Guitarra'
  }

  constructor(Props) {
    super(Props);

    this.state = { };
  }

  render() {
    return (
      <View style={styles.container}>

        <GuitarNeck/>

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