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

    this.componentDidMount = () => {
      fetch(`http://sismusic.herokuapp.com/api/lista/cursos`)
      .then((rawResponse) => rawResponse.json()).then((response) => {
        if (response.cursos !== undefined) {
          /*  obtener los datos en response.NOMBRE_ATRIBUTO

            formato de los datos:
            - nombre_profe
            - nombre_curso
          */

          let cursosCargados = [];
          Alert.alert(
            'Respuesta del servidor:',
            JSON.stringify(response.cursos)
          );

          response.cursos.forEach((item) => {
            // empujar cada uno de los cursos recibidos al array de cursosCargados
            cursosCargados.push({
              id: item.id,
              nombre: item.nombre_curso,
              descripcion: item.descripcion
            });
            console.log('Añadido curso: ' + cursosCargados[cursosCargados.length - 1]);
          });

          this.setState({cursos: cursosCargados});

        } else {
          // manejar el caso en que procesar la request ha fallado
          Alert.alert(
            'Error al procesar la respuesta',
            `Probablemente el servidor se encuentre experimentando problemas`
          );
        }
      }).catch((reason) => {
        Alert.alert(
          'Error',
          'Error al obtener la lista de cursos. Quizás se trate de un problema de red.\n\n'
          + 'Por favor, intente de nuevo más tarde.'
        );
        console.log(reason);
      });
    }

    this.state = {
      cursos: [
        {
          id: 1,
          title:
          'Curso PlaceHolder',
          descript: 'Este es un curso de relleno a mostrarse cuando no se ha cargado la lista de cursos desde la red.'
        },
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
    padding: 5
  },
  listContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    // alignItems: 'stretch',
    backgroundColor: 'yellow',
  }
});