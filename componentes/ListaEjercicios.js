import React, { Component } from 'react';
import {
  ScrollView,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Text
} from 'react-native';
// import { Container, Header, Card, CardItem, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

export default class ListaEjercicios extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text>La imagen de teclado debería tener dimensiones que lleven a su parent.</Text>
          {/* card de Teclado */}
          <TouchableOpacity onPress={() => { this.props.navigation.navigate('PianoToy') }}>
            <ImageBackground
              source={{ uri: 'toys_teclado' }}
              style={styles.imageCard}
              resizeMode='cover'
            >
              <Text style={styles.cardTitle}>Teclado</Text>
            </ImageBackground>
          </TouchableOpacity>


          {/* card de Guitarra */}
          <TouchableOpacity onPress={() => { this.props.navigation.navigate('GuitarToy') }}>
            <ImageBackground
              source={{ uri: 'toys_guitarra' }}
              style={styles.imageCard}
              resizeMode='cover'
            >
              <Text style={styles.cardTitle}>Guitarra</Text>
            </ImageBackground>
          </TouchableOpacity>

          {/* card de Batería */}
          <TouchableOpacity onPress={() => { this.props.navigation.navigate('DrumToy') }}>
            <ImageBackground
              source={{ uri: 'toys_bateria' }}
              style={styles.imageCard}
              resizeMode='cover'
            >
              <Text style={styles.cardTitle}>Batería</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  imageCard: {
    //flex: 1,
    width: '98%',
    height: 200,
    borderRadius: 5
  },
  cardTitle: {
    color: 'yellow',
    fontSize: 30,
    // marginTop: -120,
    marginLeft: 20
  }

});