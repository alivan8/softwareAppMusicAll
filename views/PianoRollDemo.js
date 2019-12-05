import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import PianoRoll from './components/PianoRoll';

export default class PianoRollDemo extends Component {

  // opciones para personalizar la navegación (ej: titulo en ActionBar)
  static navigationOptions = {
    title: 'Piano Roll'
  }

  constructor(Props) {
    super(Props);

    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={{flex: 1}}>
          <PianoRoll/>
        </View>

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