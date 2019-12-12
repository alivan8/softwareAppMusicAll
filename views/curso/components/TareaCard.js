import React, { Component } from 'react';
import {
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { Card, CardItem, Thumbnail, Text, Left, Body } from 'native-base';

export default class TareaCard extends Component {
  constructor(props) {
    /* props esperadas:
        - nombre
    */
    super(props);
  }



  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} activeOpacity={0.5}>
        <Card>
          <CardItem header>
            <Left>
              <Thumbnail circular source={{ uri: 'ic_tarea' }} />
              <Body>
                <Text>Nombre: {this.props.nombre}</Text>
              </Body>
            </Left>
          </CardItem>
        </Card>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  cardImage: {
    flex: 1,
    width: null,  // según documentación de NativeBase Card Image
    height: 300,
  }
});