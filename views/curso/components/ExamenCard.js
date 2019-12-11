import React, { Component } from 'react';
import {
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { Card, CardItem, Thumbnail, Text, Left, Body } from 'native-base';

export default class ExamenCard extends Component {
  constructor(props) {
    /* props esperadas:
        - nombre
        - descripcion
    */
    super(props);
  }



  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} activeOpacity={0.5}>
        <Card style={{ flex: 0 }}>
          <CardItem header bordered>
            <Left>
              <Thumbnail circular source={{ uri: 'ic_examen' }} />
              <Body>
                <Text>
                  Nombre: {this.props.nombre}
                </Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem bordered>
            <Text>
              Descripcion: {this.props.descripcion}
            </Text>
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