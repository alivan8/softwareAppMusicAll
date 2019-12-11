import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList
} from 'react-native';
import { Container } from 'native-base';
import Separator from './components/Separator';
import ExamenCard from './components/ExamenCard';


export default class ListExamenes extends Component {

  // opciones para personalizar la navegación (ej: titulo en ActionBar)
  static navigationOptions = {
    title: 'Examenes'
  }

  constructor(Props) {
    super(Props);

    this.state = {
      examenes: [
        { id: 1, nombre: 'Examen 1', descripcion: 'Primer parcial' },
        { id: 2, nombre: 'Examen 2', descripcion: 'Segundo Parcial' },
        { id: 3, nombre: 'Examen 3', descripcion: 'Examen Final' },
        { id: 4, nombre: 'Examen 4', descripcion: 'Recuperatorio' },
      ]
    };
  }


  render() {
    const FlatListExamenes = () =>
      <FlatList
        data={this.state.examenes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) =>
          <ExamenCard
            nombre={item.nombre}
            descripcion={item.descripcion}
            onPress={() => this.verExamen(item)}
          />
        }
        ListEmptyComponent={() => <Text>No hay examenes.</Text>}
        ItemSeparatorComponent={() => <Separator />}
      />;
    return (
      <Container style={{padding: 5}}>
        <View style={styles.contenedorTexto}>
          <Text style={styles.h1}>
            Examenes del tema:
          </Text>
          <Text style={styles.h2}>
            {this.props.navigation.getParam('temaTitulo')} (ID: {this.props.navigation.getParam('temaId')})
          </Text>
        </View>
        <Text style={styles.h3}>
          Contenido:
          </Text>
        <FlatListExamenes />
      </Container>
    );
  }


  verExamen(examen) {
    // this.props.navigation.navigate('VerExamen', {
    //   examen: examen
    // });
    alert('Navegando a examen: ' + examen.nombre);
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