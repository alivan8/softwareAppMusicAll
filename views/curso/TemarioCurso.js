import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Alert,
  ToastAndroid,
  ActivityIndicator
} from 'react-native';
import NbCard from '../components/NbCard';
import Separator from './components/Separator';

export default class TemarioCurso extends Component {

  // opciones para personalizar la navegación (ej: titulo en ActionBar)
  static navigationOptions = {
    title: 'Temario del Curso'
  }

  constructor(Props) {
    super(Props);

    this.state = {
      temas: null
    };

    this.componentDidMount = function () {
      // obtener el ID del curso especificado
      const cursoId = this.props.navigation.getParam('cursoId');
      let temasCargados = [];

      // obtener los datos del servidor
      fetch(`https://sismusic.herokuapp.com/api/lista/temarios?id=${cursoId}`)
        .then((rawResponse) => rawResponse.json()).then((response) => {
          console.warn(response);
          if (response.data !== undefined && response.data != null) {
            console.warn(response.data.length);

            response.data.forEach((item) => {
              temasCargados.push({
                id: item.id,
                title: item.titulo,
                descript: item.justicacion
              });
            });
            ToastAndroid.show(
              `Se ha cargado ${temasCargados.length} temas`,
              ToastAndroid.LONG
            );

            this.setState({ temas: temasCargados });
            console.warn('temasCargados: ', temasCargados);
          } else {
            Alert.alert(
              'Error al procesar los temas',
              'Probablemente el servidor se encuentra experimentando problemas'
            );
            this.setState({ temas: temasCargados });
          }
        }).catch((reason) => {
          Alert.alert(
            'Error',
            'Error al obtener la lista de temas del curso elegido. Quizás se trate de un problema de red.\n\n'
            + 'Por favor, intente de nuevo más tarde.'
          );
          console.warn(reason);
          this.setState({ temas: temasCargados });
        });
    }
  }

  render() {
    const flatList = <FlatList
      data={this.state.temas}
      renderItem={({ item }) => <NbCard title={item.title} descript={item.descript} onPress={() => this.verTema(item)} />}
      keyExtractor={(item) => item.id.toString()}
      ItemSeparatorComponent={() => <Separator />}
      ListEmptyComponent={() => <Text>No hay temas</Text>}
    />;
    const loading = <ActivityIndicator size='large' color='blue' />;

    const cursoNombre = this.props.navigation.getParam('cursoNombre');
    const cursoId = this.props.navigation.getParam('cursoId');

    return (
      <View style={styles.container}>
        <View>
          <Text>Usted está viendo los temas del curso:</Text>
          <Text>{`${cursoNombre} (ID: ${cursoId})`}</Text>
        </View>

        {this.state.temas ? flatList : loading}
      </View>
    );
  }


  verTema(tema) {
    this.props.navigation.navigate('NavegadorTema', {
      temaId: tema.id,
      temaTitulo: tema.title
    });
    // Alert.alert('Ir a ver tema: ' + temaId);
  }

} // end of TemarioCurso class

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    padding: 5
  },
});