import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList
} from 'react-native';
import ListItem from '../components/ListItem';

export default class ListaCuros extends Component {

  // opciones para personalizar la navegación (ej: titulo en ActionBar)
  static navigationOptions = {
    title: 'Lista de Cursos'
  }

  constructor(Props) {
    super(Props);

    this.state = {
      cursos: [
        { title: 'Curso 1', descript: 'Dia del full blast, let it go.' },
        { title: 'Curso 2', descript: 'Dia del alargue, keep going.' },
        { title: 'Curso 3', descript: 'Dia del aguante, dont pussy out.' },
        { title: 'Curso 4', descript: 'Dia del sufrimiento, get thru it.' },
        { title: 'Curso 5', descript: 'Dia del cuestionamiento, is this for me?.' },
        { title: 'Curso 6', descript: 'Dia de la determinación, go for it.' },
        { title: 'Curso 7', descript: 'Dia de la persistencia, keep at it.' },
        { title: 'Curso 8', descript: 'Dia del honor, you got it, you own it.' },
      ]
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Lista de Cursos</Text>
        <View style={styles.listContainer}>
          <FlatList
            data = {this.state.cursos}
            renderItem = {({item}) => <ListItem title={item.title} descript={item.descript}/>}
            keyExtractor = {(item) => this.state.cursos.indexOf(item).toString()}
          />
        </View>
        
        
      </View>
    );
  }

} // end of HelloWordApp class

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    // alignItems: 'stretch',
    backgroundColor: 'white',
  },
  listContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    // alignItems: 'stretch',
    backgroundColor: 'yellow',
  }
});