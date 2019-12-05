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

export default class ListaCardsCursos extends Component {

  // opciones para personalizar la navegación (ej: titulo en ActionBar)
  static navigationOptions = {
    title: 'Lista de Cursos (cards)'
  }

  constructor(Props) {
    super(Props);

    this.state = {
      cursos: [
        { id: 1, title: 'Curso 1', descript: 'Dia del full blast, let it go.' },
        { id: 2, title: 'Curso 2', descript: 'Dia del alargue, keep going.' },
        { id: 3, title: 'Curso 3', descript: 'Dia del aguante, dont pussy out.' },
        { id: 4, title: 'Curso 4', descript: 'Dia del sufrimiento, get thru it.' },
        { id: 5, title: 'Curso 5', descript: 'Dia del cuestionamiento, is this for me?.' },
        { id: 6, title: 'Curso 6', descript: 'Dia de la determinación, go for it.' },
      ]
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Lista de Cursos</Text>
        <FlatList
          data={this.state.cursos}
          renderItem={({item}) => <NbCard title={item.title} descript={item.descript} onPress={() => this.verTemario(item.id) } />}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={()=><Separator/>}
        />        
      </View>
    );
  }


  verTemario(cursoId){
    this.props.navigation.navigate('TemarioCurso', {
      cursoId: cursoId
    });
    // Alert.alert('Ver temario del curso: ' + cursoId);
  }

} // end of ListaCardsCursos class

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