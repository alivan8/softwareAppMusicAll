import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Alert
} from 'react-native';
import NbCard from '../components/NbCard';

function Separator() {
  return (
    <View
      style={{
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
      }}
    />
  );
}

export default class TemarioCurso extends Component {

  // opciones para personalizar la navegación (ej: titulo en ActionBar)
  static navigationOptions = {
    title: 'Ver Temario'
  }

  constructor(Props) {
    super(Props);

    this.state = {
      temas: [
        { id: 1, title: 'Tema 1', descript: 'Dia del full blast, let it go.' },
        { id: 2, title: 'Tema 2', descript: 'Dia del alargue, keep going.' },
        { id: 3, title: 'Tema 3', descript: 'Dia del aguante, dont pussy out.' },
        { id: 4, title: 'Tema 4', descript: 'Dia del sufrimiento, get thru it.' },
      ]
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ alignSelf: 'center' }}>Temario del Curso: {this.props.navigation.getParam('cursoId')}</Text>
        <FlatList
          data={this.state.temas}
          renderItem={({ item }) => <NbCard title={item.title} descript={item.descript} onPress={() => this.verTema(item.id)} />}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={() => <Separator />}
        />
      </View>
    );
  }


  verTema(temaId) {
    this.props.navigation.navigate('NavegadorTema', {
      temaId: temaId
    });
    // Alert.alert('Ir a ver tema: ' + temaId);
  }

} // end of TemarioCurso class

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
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