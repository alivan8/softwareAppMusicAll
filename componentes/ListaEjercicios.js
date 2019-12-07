import React, { Component } from 'react';
import { ScrollView, Image, View, StyleSheet } from 'react-native';
import { Container, Header, Card, CardItem, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

export default class ListaEjercicios extends Component {
  render() {
    return (
      <Container>
        <Text>La imagen de teclado debería tener dimensiones que lleven a su parent.</Text>
        {/* card de Teclado */}
        <TouchableOpacity onPress={this.props.navigation.navigate('PianoRollToy')}>
          <Card style={{ flex: 0 }}>
            <CardItem>
              {/* TODO: aplicar disposición "fill" a la imagen */}
              <Image
                source={{ uri: 'toys_teclado' }}
                style={{ flex: 1, alignSelf: 'stretch', width: undefined, height: undefined }}
                resizeMode='cover'
              />
            </CardItem>
            <CardItem style={{ marginTop: -100 }}>
              <Text>Teclado</Text>
            </CardItem>
          </Card>
        </TouchableOpacity>


        {/* card de Guitarra */}
        <TouchableOpacity onPress={this.props.navigation.navigate('GuitarNeckToy')}>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Image source={{ uri: 'toys_guitarra' }} />
            </CardItem>
            <CardItem style={{ marginTop: -100 }}>
              <Text>Guitarra</Text>
            </CardItem>
          </Card>
        </TouchableOpacity>

        {/* card de Batería */}
        <TouchableOpacity onPress={this.props.navigation.navigate('DrumToy')}>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Image source={{ uri: 'toys_bateria' }} />
            </CardItem>
            <CardItem style={{ marginTop: -100 }}>
              <Text>Batería</Text>
            </CardItem>
          </Card>
        </TouchableOpacity>

      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
  },
  cardTitle: {
    color: 'white',
    fontSize: 30
  }

});