import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
  TouchableOpacity
} from 'react-native';

// con qué necesitad se está haciendo esto? vvvv
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: ReactNative.createElement']);
console.disableYellowBox = true;
// ^^^^^^ ?

export default class Profile extends Component {
  constructor(Props) {
    super(Props);

    this.state = {
      perfil: {
        nombre: 'Nombre 1',
        apellidos: 'Apellido 1',
        correo: 'placeholder@mail.com',
        telefono: '+591-789456123'
      }
    };

    this.componentDidMount = () => {
      // fetch(`https://sismusic.herokuapp.com/api/perfil?correo=estudiante1@gmail.com`) // <- hardcoded email!
      
      // TODO: cargar la direccion email del estudiante de manera dinámica
      // por ahora, usando fallback el 100% de las veces...
      const mailEstudiante = this.props.navigation.getParam('mailEstudiante', 'estudiante1@gmail.com');
      fetch(`https://sismusic.herokuapp.com/api/perfil?correo=${mailEstudiante}`)
        .then((rawResponse) => rawResponse.json()).then((response) => {
          if (response.data != undefined && response.data != null) {
            /*  obtener los datos en response.data */
            // console.warn(JSON.stringify(response.data));

            // verificar si data es un array y si su tamaño es mayor a cero.
            // solo en ese caso cargamos sus datos
            if (Array.isArray(response.data) && response.data.length > 0){
              this.setState({ perfil: response.data[0]});
            }else{
              console.warn('Se ha obtenido un array vacio al cargar los datos del perfil del estudiante!');
            }
            

          } else {
            // console.log('error');
            Alert.alert(
              'Error',
              'Error al obtener la información del perfil de estudiante.\n'
              + 'Los datos obtenidos no tienen el formato esperado.\n\n'
              + 'Consulte con el administrador del sistema.'
            );
          }
        }).catch((reason) => {
          Alert.alert(
            'Error',
            'Error al obtener la información del perfil de estudiante.\n'
            + 'Quizás se trate de un problema de red.\n\n'
            + 'Por favor, intente de nuevo más tarde.'
          );
          console.warn(reason);
        });
    }
  } // end of constructor method

  onPress = () => {
    this.setState({
      count: this.state.count + 1
    })

  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={{ uri: 'paisaje_2' }}
            style={styles.header}
          />
        </View>
        <Image style={styles.avatar} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZG3qeSQGwVGlbucrqptN1vA0WpXBuwKb_knmj8qV6Dbn6KIcd' }} />
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <Text style={styles.name}>{this.state.perfil.nombre + " " + this.state.perfil.apellidos}</Text>
            <Text style={styles.info}>{this.state.perfil.correo}</Text>
            <Text style={styles.description}>TELF:{this.state.perfil.telefono}</Text>
            <Text style={styles.description}>"" No fui capaz de discutirlo con nadie porque sentía, sin poder explicarlo, que mis razones solo podían ser válidas para mí ""</Text>

            <TouchableOpacity style={styles.buttonContainer}
              onPress={() => this.props.navigation.navigate('ListaCursosIncritos')}
            >
              <Text style={{ color: 'white' }}>  MIS CURSOS ></Text>
            </TouchableOpacity>

          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "blue",
    height: 300,
  },
  avatar: {
    width: 160,
    height: 160,
    borderRadius: 80,
    borderWidth: 2,
    borderColor: "white",
    marginBottom: 15,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 200
  },
  name: {
    fontSize: 22,
    color: 'red',
    fontWeight: '600',
  },
  body: {
    marginTop: 20,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: "#696969",
    fontWeight: "600"
  },
  info: {
    fontSize: 16,
    color: "#00BFFF",
    marginTop: 10
  },
  description: {
    fontSize: 16,
    color: "#696969",
    marginTop: 10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop: 0,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: "#00BFFF",
  },
});
