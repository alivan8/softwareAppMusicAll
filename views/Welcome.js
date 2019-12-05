import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  Image,
  Button
} from 'react-native';

function Separator() {
  return <View style={styles.separator} />;
}

export default class Welcome extends Component {

  // opciones para personalizar la navegación (ej: titulo en ActionBar)
  static navigationOptions = {
    title: 'MusiClass'
  }

  constructor(Props) {
    super(Props);

    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='darkblue'/>
        <Text style={styles.textoBienvenida}>Bienvenido a MusiClass!</Text>
        <Image source={{ uri: 'music_study' }} style={styles.image}/>

        <View style={{width: '90%'}}>
          <Separator/>
          <Button
            title='PianoRoll'
            color='blue'
            onPress={() => {
              this.props.navigation.navigate('PianoRollDemo');
            }}
          />
          <Separator/>
          <Button
            title='GuitarNeck'
            color='steelblue'
            onPress={() => {
              this.props.navigation.navigate('GuitarNeckDemo');
            }}
          />
          <Separator/>
          <Button
            title='Lista de Temas de Práctica (ScrollView)'
            color='skyblue'
            onPress={() => {
              this.props.navigation.navigate('ListaTemasPractica');
            }}
          />
          <Separator/>
          <Button
            title='Lista de Cursos (FlatList)'
            color='skyblue'
            onPress={() => {
              this.props.navigation.navigate('ListaCursos');
            }}
          />
          <Separator/>
          <Button
            title='Lista de Cursos (Card)'
            color='limegreen'
            onPress={() => {
              this.props.navigation.navigate('ListaCardsCursos');
            }}
          />
          <Separator/>
        </View>

      </View>
    );
  }

} // end of HelloWordApp class

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FCFCFC',
  },
  image: {
    height: 150,
    width: 150
  },
  textoBienvenida: {
    fontSize: 36,
    fontFamily: 'times-new-roman',
    fontWeight: 'bold',
    fontStyle: 'italic',
    margin: 10
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});