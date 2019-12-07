import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  Image,
  Button,
  Dimensions,
  ScrollView 
} from 'react-native';

function Separator() {
  return <View style={styles.separator} />;
}

export default class Welcome extends Component {

  // opciones para personalizar la navegación (ej: titulo en ActionBar)
  static navigationOptions = {
    title: 'MusiClass'
  }

  constructor(Props) {
    super(Props);

    this.state = {};
  }

  render() {
    const { width } = Dimensions.get('window');
    const ratio = width/541;
    //const height=362*ratio
    const height=400*ratio
    console.log(ratio)
    return (
      <ScrollView >
      <View style={styles.container}>
        <StatusBar backgroundColor='#000bdf'/>
       
        <Image
                source={{ uri: 'guitarra'  }}
                style={{ height, width, flex: 1, alignSelf: 'center' }}
              />
       
        <View style={{width: '90%'}}>
          <Separator/>
          <Button
            title='PianoRoll'
            color='#000bdf'
            onPress={() => {
              this.props.navigation.navigate('PianoRollDemo');
            }}
          />
          <Separator/>
          <Button
            title='GuitarNeck'
            color='#df000b'
            onPress={() => {
              this.props.navigation.navigate('GuitarNeckDemo');
            }}
          />
          <Separator/>
          <Button
            title='Lista de Temas de Práctica (ScrollView)'
            color='#dfd300'
            onPress={() => {
              this.props.navigation.navigate('ListaTemasPractica');
            }}
          />
         {/**<Separator/>  */}
         
        {/**<Button
            title='Lista de Cursos (FlatList)'
            color='skyblue'
            onPress={() => {
              this.props.navigation.navigate('ListaCursos');
            }}
          />   */} 
          <Separator/>
          <Button
            title='Lista de Cursos (Card)'
            color='#1d5c34'
            onPress={() => {
              this.props.navigation.navigate('ListaCardsCursos');
            }}
          />
          <Separator/>
        </View>
      
      </View>
      </ScrollView>  
    );
    
  }

} // end of HelloWordApp class

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  image: {
    height: 150,
    width: 150
  },
  textoBienvenida: {
    fontSize: 36,
    fontFamily: 'times-new-roman',
    fontWeight: 'bold',
    fontStyle: 'italic',
    margin: 10
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

});