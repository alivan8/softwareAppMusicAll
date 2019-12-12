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
import Separator from './components/Separator';

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
      // array de los cursos a cargar desde la API
      let cursosCargados = [];  // inicialmente vacío, obviamente :v
      
      fetch(`https://sismusic.herokuapp.com/api/lista/cursos`)
        .then((rawResponse) => rawResponse.json()).then((response) => {
          if (response.data != undefined && response.data != null) {
            // console.warn(JSON.stringify(response.data));

            // empujar cada uno de los cursos recibidos al array cursosCargados
            response.data.forEach((curso) => {
              cursosCargados.push({
                id: curso.id,
                title: curso.nombre_curso,
                descript: curso.descripcion
              });
            });

            // informar a traves de un toast
            ToastAndroid.show(
              `Se ha cargado ${cursosCargados.length} cursos`,
              ToastAndroid.LONG
            );

            // finalmente establecer el estado
            this.setState({ cursos: cursosCargados });

          } else {
            // manejar el caso en que procesar la request ha fallado
            Alert.alert(
              'Error al procesar la respuesta',
              `Probablemente el servidor se encuentre experimentando problemas`
            );
          }
          this.setState({ cursos: cursosCargados });
        }).catch((reason) => {
          Alert.alert(
            'Error',
            'Error al obtener la lista de cursos. Quizás se trate de un problema de red.\n\n'
            + 'Por favor, intente de nuevo más tarde.'
          );
          console.warn(reason);
          this.setState({ cursos: cursosCargados });
        });
    } // end of componentDidMount event


  } // end of constructor

  render() {
    const loading = <ActivityIndicator size='large' color='blue' />;
    const flatList =
      <FlatList
        data={this.state.cursos}
        renderItem={({ item }) =>
          <NbCard
            title={item.title}
            descript={item.descript}
            onPress={() => this.verTemario(item)}
            imgUri={'teach_child_' + (Math.floor(Math.random() * 4) + 1)}
          />
        }
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => <Separator />}
        ListEmptyComponent={() => <Text>No hay cursos disponibles</Text>}
      />;

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