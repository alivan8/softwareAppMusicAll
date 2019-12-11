import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
} from 'react-native';
import { Container } from 'native-base';
import Separator from './components/Separator';
import TareaCard from './components/TareaCard';


export default class ListaTareas extends Component {

  // opciones para personalizar la navegación (ej: titulo en ActionBar)
  static navigationOptions = {
    title: 'Tareas'
  }

  constructor(Props) {
    super(Props);

    this.state = {
      tareas: [
        { id: 1, nombre: 'Tarea 1' },
        { id: 2, nombre: 'Tarea 2' },
        { id: 3, nombre: 'Tarea 3' },
        { id: 4, nombre: 'Tarea 4' },
      ]
    };
  }


  render() {
    const FlatListTareas = () =>
      <FlatList
        data={this.state.tareas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) =>
          <TareaCard
            nombre={item.nombre}
            onPress={() => this.verTarea(item)}
          />
        }
        ListEmptyComponent={() => <Text>No hay tareas.</Text>}
        ItemSeparatorComponent={() => <Separator />}
      />;


    return (
      <Container style={{padding: 3}}>
        <View style={styles.contenedorTexto}>
          <Text style={styles.h1}>
            Tareas del tema:
          </Text>
          <Text style={styles.h2}>
            {this.props.navigation.getParam('temaTitulo')} (ID: {this.props.navigation.getParam('temaId')})
          </Text>
        </View>
        <Text style={styles.h3}>Contenido:</Text>
        <FlatListTareas />
      </Container>
    );
  }


  verTarea(tarea) {
    /* this.props.navigation.navigate('VerTarea', {
      tarea: tarea
    });*/
    alert('Navegando a VerTarea con tarea: \n' + tarea.nombre);
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