import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

export default class Profile extends Component {
  constructor(Props) {
    super(Props);

    this.state = {
      cursos: [
        /* {
         id:1,
         nombre:'juan',
         apellido:'marciano',
         telefono:'#43434343',
         email:'alivan7@hotmail.com'
        }, */
      ]
    };
  }
  
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}>
          <Image
                source={{ uri: 'paisaje' + (Math.floor(Math.random() * 4) + 1) }}
             style={styles.header}
              />
          </View>
          <Image style={styles.avatar} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZG3qeSQGwVGlbucrqptN1vA0WpXBuwKb_knmj8qV6Dbn6KIcd'}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>nombre</Text>
              <Text style={styles.info}>UX Designer / Mobile developer</Text>
              <Text style={styles.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text>
              
              <TouchableOpacity style={styles.buttonContainer}>
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
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
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
    marginTop:10,
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
 