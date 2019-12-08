import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

export default class DrumToy extends Component {

  // opciones para personalizar la navegación (ej: titulo en ActionBar)
  /* static navigationOptions = {
    title: 'Batería'
  }*/

  constructor(Props) {
    super(Props);

    this.state = { };
  }

  render() {
    return (
      <View style={styles.container}>

        <Text>Coming Soon!</Text>

      </View>
    );
  }

} // end of DrumToy class

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '#FCFCFC',
  }
});