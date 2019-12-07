import React, { Component } from 'react';
import {
  ScrollView,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  Text
} from 'react-native';
 import { Container, Header, Card, CardItem, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon} from 'native-base';

export default class ListaEjercicios extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          {/* card de Teclado */}
          <TouchableOpacity onPress={() => { this.props.navigation.navigate('PianoToy') }}>
            <Card>
              <CardItem cardBody>
                <Image
                  source={{ uri: 'toys_teclado' }}
                  style={styles.cardImage}
                />
              </CardItem>
              <CardItem>
                <Text style={styles.cardTitle}>Teclado/Piano</Text>
              </CardItem>
            </Card>
          </TouchableOpacity>


          {/* card de Guitarra */}
          <TouchableOpacity onPress={() => { this.props.navigation.navigate('GuitarToy') }}>
            <Card>
              <CardItem cardBody>
                <Image
                  source={{ uri: 'toys_guitarra' }}
                  style={styles.cardImage}
                />
              </CardItem>
              <CardItem>
                <Text style={styles.cardTitle}>Guitarra</Text>
              </CardItem>
            </Card>
          </TouchableOpacity>

          {/* card de Batería */}
          <TouchableOpacity onPress={() => { this.props.navigation.navigate('DrumToy') }}>
            <Card>
              <CardItem cardBody>
                <Image
                  source={{ uri: 'toys_bateria' }}
                  style={styles.cardImage}
                />
              </CardItem>
              <CardItem>
                <Text style={styles.cardTitle}>Batería</Text>
              </CardItem>
            </Card>
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // margin: 10,
    // alignItems: 'fl',
  },
  card: {
    // flexDirection: 'column'
    //flex: 0,
    // width: '100%'
  },
  cardImage: {
    flex: 1,
    width: null,  // según documentación de NativeBase Card Image
    height: 200,
    // borderRadius: 5
  },
  cardTitle: {
    // color: 'silver',
    fontSize: 20,
    // marginTop: -120,
    marginLeft: 20
  }

});