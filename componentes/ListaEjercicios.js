import React, { Component } from 'react';
import { ScrollView, Image, View, StyleSheet } from 'react-native';
import { Container, Header, Card, CardItem, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

function EjercicioCard() {
  return (
    <TouchableOpacity onPress={this.props.onPress}>
      <Card style={{ flex: 0 }}>
        <CardItem>
          <Image source={{ uri: this.props.image }} />
        </CardItem>
        <CardItem>
          <Text></Text>
        </CardItem>
      </Card>
    </TouchableOpacity>
  );
}

class Ejercicio extends Component {
  render() {
    return (
      <Container>
        {/* card de Teclado */}
        <TouchableOpacity onPress={this.props.onPress}>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Image source={{ uri: 'teclado' }} />
            </CardItem>
            <CardItem>
              <Text>Teclado</Text>
            </CardItem>
          </Card>
        </TouchableOpacity>


        {/* card de Guitarra */}
        <TouchableOpacity onPress={this.props.onPress}>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Image source={{ uri: 'guitarra' }} />
            </CardItem>
            <CardItem>
              <Text>Guitarra</Text>
            </CardItem>
          </Card>
        </TouchableOpacity>

        {/* card de Batería */}
        <TouchableOpacity onPress={this.props.onPress}>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Image source={{ uri: 'bateria' }} />
            </CardItem>
            <CardItem>
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

export default Ejercicio;