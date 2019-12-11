import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Alert,
  ActivityIndicator,
  ToastAndroid
} from 'react-native';
import NbCard from '../components/NbCard';

function Separator() {
  return (
    <View
      style={{
        marginVertical: 8,
        borderBottomColor: 'silver',
        borderBottomWidth: StyleSheet.hairlineWidth,
      }}
    />
  );
}

export default class ListaCursos extends Component {

  // opciones para personalizar la navegación (ej: titulo en ActionBar)
  static navigationOptions = {
    title: 'Lista de Cursos'
  }

  constructor(Props) {
    super(Props);

    this.state = {
      cursos: null    // inicialmente, cursos es null
    };

    this.componentDidMount = () => {
      fetch(`https://sismusic.herokuapp.com/api/lista/cursos`)
        .then((rawResponse) => rawResponse.json()).then((response) => {
          if (response.data !== undefined) {
            /*  obtener los cursos en response.data */

            let cursosCargados = [];
            // Alert.alert(
            //   'Respuesta del servidor:',
            //   JSON.stringify(response.cursos)
            // );

            response.data.forEach((curso) => {
              // empujar cada uno de los cursos recibidos al array de cursosCargados
              cursosCargados.push({
                id: curso.id,
                title: curso.nombre_curso,
                descript: curso.descripcion
              });
              // console.log('Añadido curso: ' + cursosCargados[cursosCargados.length - 1]);
            });

            this.setState({ cursos: cursosCargados });
            ToastAndroid.show(
              `Se ha cargado ${cursosCargados.length} cursos`,
              ToastAndroid.LONG
            );

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
          console.warn(reason);
        });
    }
  }

  render() {
    const flatList = <FlatList
      data={this.state.cursos}
      renderItem={({ item }) =>
        <NbCard
          title={item.title}
          descript={item.descript}
          onPress={() => this.verTemario(item)}
        />
      }
      keyExtractor={(item) => item.id.toString()}
      ItemSeparatorComponent={() => <Separator />}
      ListEmptyComponent={() => <Text>No hay cursos disponibles</Text>}
    />;
    const loading = <ActivityIndicator size='large' color='blue' />;

    return (
      <View style={styles.container}>
        {this.state.cursos ? flatList : loading}
      </View>
    );
  }


  /**
   * Function que permite ver el temario de un curso elegido
   * @param Integer cursoId 
   */
  verTemario(curso) {
    this.props.navigation.navigate('TemarioCurso', {
      cursoId: curso.id,
      cursoNombre: curso.title
    });
    // Alert.alert('Ver temario del curso: ' + cursoId);
  }

} // end of ListaCursos class

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    padding: 5
  }
});