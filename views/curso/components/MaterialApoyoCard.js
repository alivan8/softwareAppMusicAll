import React, { Component } from 'react';
import {
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { Card, CardItem, Thumbnail, Text, Left, Body } from 'native-base';

export default class MaterialApoyoCard extends Component {
  constructor(props) {
    /* props esperadas:
        - nombre
        - tipoMaterial
    */
    super(props);
  }



  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} activeOpacity={0.5}>
        <Card>
          <CardItem header bordered>
            <Left>
              <Thumbnail circular source={{ uri: 'ic_adjunto' }} />
              <Body>
                <Text>Nombre: {this.props.nombre}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem bordered>
            <Text>
              Tipo: {this.props.tipoMaterial}
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