
import React from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import {StackEntrenamientoAuditivo} from './StackEntrenamientoAuditivo';
import {StackEntrenamientoRitmo} from './StackEntrenamientoRitmo';
import {StackEjercicios} from './StackEjercicios';
import {StackPerfil} from './StackPerfil';
import{Image,View} from 'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import {StackArauz} from '../views/StackArauz';

import Icon from 'react-native-vector-icons/FontAwesome';
//import Icon from 'react-native-vector-icons/Ionicons';  

//const Home = createAppContainer(StackHome);

//const Search = createAppContainer(StackSearch);

export const RutasGenerales = createMaterialBottomTabNavigator({
  StackArauz: {
    screen: StackArauz,
    navigationOptions:{
      headerTintColor: "#fff",
      tabBarLabel:'AUDITIVOS',
      shifting : 'true',
      tabBarColor:'#0065ff',
      activeColor: '#fff',
      inactiveColor: '#1e9b1e',
     // tabBarIcon: ({ color, size }) => (
       // <MaterialCommunityIcons name="home" color={color} size={size} />
      //),
   },
  },
  
  
  EntrenamientoAuditivo: {
    screen: StackEntrenamientoAuditivo,
    navigationOptions:{
      headerTintColor: "#fff",
      tabBarLabel:'AUDITIVOS',
      shifting : 'true',
      tabBarColor:'#0065ff',
      activeColor: '#fff',
      inactiveColor: '#1e9b1e',
     // tabBarIcon: ({ color, size }) => (
       // <MaterialCommunityIcons name="home" color={color} size={size} />
      //),
   },
  },
  
  EntrenamientoRitmo: {
    screen: StackEntrenamientoRitmo,
    navigationOptions:{
      tabBarLabel:'RITMO',
       activeColor: '#fff',
       //tabBarVisible:false,
       shifting:true,
       labeled:true,
       inactiveColor: '#1e9b1e',
       tabBarColor:'#0065ff',
       tabBarIcon:({tintColor})=>(
         <View>
        <Icon name="home" color={tintColor} size={25}/>  
        </View>
    ),
    },
  },
  Ejercicio: {
    screen: StackEjercicios,
    navigationOptions:{
      tabBarLabel:'EJERCICIOS',
      
      //tabBarBadge:'string',
      activeColor: '#fff',
      inactiveColor: '#1e9b1e',
      tabBarColor:'#0065ff',
      tabBarIcon:({tintColor})=>(
        <View>
       <Icon name="home" color={tintColor} size={25}/>  
       </View>
             ),
   },
  },
  Perfil: {
    screen: StackPerfil,
    navigationOptions:{
      tabBarLabel:'perfil',
      activeColor: '#fff',
      inactiveColor: '#1e9b1e',
      tabBarLabel:'PERFIL',
      tabBarColor:'#0065ff',
     // barStyle={ { paddingBottom: 10 }},
      tabBarIcon:({tintColor})=>(
        <View>
       <Icon name="home" color={tintColor} size={25}/>  
       </View>
        ),
      
   },
  },
  
}




);