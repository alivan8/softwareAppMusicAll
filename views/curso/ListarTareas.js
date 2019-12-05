import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';


export default class VerTema extends Component {

  // opciones para personalizar la navegación (ej: titulo en ActionBar)
  static navigationOptions = {
    title: 'Tareas'
  }

  constructor(Props) {
    super(Props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contenedorTexto}>
          <Text style={styles.h1}>Tareas del Tema: {this.props.navigation.getParam('temaId')}</Text>
        </View>
        <Text style={styles.h2}>Contenido del curso :v</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Tibi hoc incredibile, quod beatissimum.
          Eam stabilem appellas.
          Perturbationes autem nulla naturae vi commoventur, omniaque ea sunt opiniones ac iudicia levitatis.
          An potest, inquit ille, quicquam esse suavius quam nihil dolere?
          Quae est igitur causa istarum angustiarum?
          Duo Reges: constructio interrete.
        </Text>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  contenedorTexto: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
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