import React, { Component } from 'react'
import {ScrollView, Image, View, StyleSheet} from 'react-native'
import { Container, Card,CardItem,Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base'

class Perfil extends Component {
    render() {
        return (
          <View style={styles.container}>
            <Text>actualizado</Text>
            <Text>Luis Alejandro Dice "Hola"</Text>
          </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Perfil;