import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList
} from 'react-native';
import { Container } from 'native-base';
import Separator from './components/Separator';
import MaterialApoyoCard from './components/MaterialApoyoCard';


export default class ListarMaterialesApoyo extends Component {

  // opciones para personalizar la navegación (ej: titulo en ActionBar)
  static navigationOptions = {
    title: 'Material de Apoyo'
  }

  constructor(Props) {
    super(Props);

    this.state = {
      materiales: [
        { id: 1, nombre: 'Material1', tipoMaterial: 'TipoMaterial1' },
        { id: 2, nombre: 'Material2', tipoMaterial: 'TipoMaterial2' },
        { id: 3, nombre: 'Material3', tipoMaterial: 'TipoMaterial3' },
        { id: 4, nombre: 'Material4', tipoMaterial: 'TipoMaterial4' },
      ]
    };
  }


  render() {
    const FlatListMaterialesApoyo = () =>
      <FlatList
        data={this.state.materiales}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) =>
          <MaterialApoyoCard
            nombre={item.nombre}
            tipoMaterial={item.tipoMaterial}
            onPress={() => this.verMaterialApoyo(item)}
          />
        }
        ListEmptyComponent={() => <Text>No hay materiales</Text>}
        ItemSeparatorComponent={() => <Separator />}
      />;
    return (
      <Container style={{padding: 3}}>
        <View style={styles.contenedorTexto}>
          <Text style={styles.h1}>
            Materiales de apoyo del tema:
          </Text>
          <Text style={styles.h2}>
            {this.props.navigation.getParam('temaTitulo')} (ID: {this.props.navigation.getParam('temaId')})
          </Text>
        </View>
        <Text style={styles.h3}>Contenido:</Text>
        <FlatListMaterialesApoyo />
      </Container>
    );
  }


  verMaterialApoyo(materialApoyo) {
    /* this.props.navigation.navigate('VerMaterialApoyo', {
      materialApoyo: materialApoyo
    });*/
    alert('Navegando a material de apoyo: ' + materialApoyo.nombre);
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 5,
  },
  contenedorTexto: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  h1: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  h2: {
    fontSize: 18,
  },
  h3: {
    fontSize: 16,
  }
});