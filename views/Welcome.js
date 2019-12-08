import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Image,
  Button,
  Dimensions,
  ScrollView,
  Alert
} from 'react-native';

function Separator() {
  return <View style={{
      marginVertical: 10,
      borderBottomColor: 'silver',
      borderBottomWidth: StyleSheet.hairlineWidth,
    }}/>;
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

    // formulita para una imagen que ocupa 100% del ancho
    // de la pantalla, manteniendo relación de aspecto
    const width = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const ratio = width / windowHeight;
    const height = width * ratio;

    return (
      <ScrollView >
        <View style={styles.container}>
          <StatusBar backgroundColor='#000bdf' />

          <Image
            source={{ uri: 'guitarra' }}
            style={{ height, width, flex: 1, alignSelf: 'center' }}
          />

          <View style={styles.buttonsView}>
            <Separator/>
            <Button
              title='Lista de Temas de Práctica'
              color='#cf9cff'
              onPress={() => {
                this.props.navigation.navigate('ListaTemasPractica');
              }}
            />
            <Separator/>
            <Button
              title='Lista de Cursos'
              color='#9c34ff'
              onPress={() => {
                this.props.navigation.navigate('ListaCursos');
              }}
            />
            <Separator/>
            <Button
              title='NoUtilizado'
              color='#6200c3'
              onPress={() => {
                Alert.alert('No implementado','Esta función no está implementada.');
              }}
            />
            <Separator/>
            <Button
              title='NoUtilizado'
              color='#320063'
              onPress={() => {
                Alert.alert('No implementado','Esta función no está implementada.');
              }}
            />
            {/*
            
            <Separator/>
            <Button
              title='Lista de Cursos (FlatList)'
              color='skyblue'
              onPress={() => {
                this.props.navigation.navigate('ListaCursos');
              }}
            />   */}
            <Separator />
          </View>

        </View>
      </ScrollView>
    );

  }

} // end of HelloWordApp class

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
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
  buttonsView: {
    width: '90%'
  }
});