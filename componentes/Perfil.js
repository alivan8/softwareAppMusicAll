import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
  TouchableOpacity
} from 'react-native';
import {YellowBox} from 'react-native';
YellowBox.ignoreWarnings(['Warning: ReactNative.createElement']);
console.disableYellowBox = true;
export default class Profile extends Component {
  constructor(Props) {
    super(Props);

    this.state = {
        perfil: {}
    };
    this.componentDidMount = () => {
      fetch(`https://sismusic.herokuapp.com/api/perfil?correo=estudiante1@gmail.com`)
        .then((rawResponse) => rawResponse.json()).then((response) => {
          if (response.data !== undefined) {
            /*  obtener los datos en response.cursos */
            console.warn(JSON.stringify(response.data));

              let perfil = {};
        

              this.setState({perfil: response.data[0]})

          } else {
            console.log('error');
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
  onPress = () => {
    this.setState({
      count: this.state.count+1
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
          <Image style={styles.avatar} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZG3qeSQGwVGlbucrqptN1vA0WpXBuwKb_knmj8qV6Dbn6KIcd'}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>{this.state.perfil.nombre+this.state.perfil.apellidos}</Text>
              <Text style={styles.info}>{this.state.perfil.correo}</Text>
    <Text style={styles.description}>TELF:{this.state.perfil.telefono}</Text>
    <Text style={styles.description}>"" No fui capaz de discutirlo con nadie porque sentía, sin poder explicarlo, que mis razones solo podían ser válidas para mí ""</Text>
              
              <TouchableOpacity style={styles.buttonContainer}
              onPress={()=>this.props.navigation.navigate('CursoPerfil')}
              >
                <Text style={{color:'white'}}>  MIS CURSOS ></Text>  
              </TouchableOpacity>              
              
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "blue",
    height:300,
  },
  avatar: {
    width: 160,
    height: 160,
    borderRadius: 80,
    borderWidth: 2,
    borderColor: "white",
    marginBottom:15,
    alignSelf:'center',
    position: 'absolute',
    marginTop:200
  },
  name:{
    fontSize:22,
    color:'red',
    fontWeight:'600',
  },
  body:{
    marginTop:20,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:0,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
});
 