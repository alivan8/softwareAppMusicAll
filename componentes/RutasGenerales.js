
import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import {StackEntrenamientoAuditivo} from './StackEntrenamientoAuditivo';
import {StackEntrenamientoRitmo} from './StackEntrenamientoRitmo';
import {StackEjercicios} from './StackEjercicios';
import {StackPerfil} from './StackPerfil';
import {StackPerfil2} from './StackPerfil2';
import{Image,View} from 'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import {StackArauz} from '../views/StackArauz';
import Swiper from "react-native-web-swiper";
import Tunnerr from './tunner/app';

//import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';

//import Icon from 'react-native-vector-icons/Ionicons';  

//const Home = createAppContainer(StackHome);

//const Search = createAppContainer(StackSearch);

export const RutasGenerales = createMaterialTopTabNavigator({
  StackArauz: {
    screen: StackArauz,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        
        <Icon name="home" size={30} color={tintColor} />
      ),
      title:'MENU',
    },
  },
 
  StackEjercicios: {
    screen: StackEjercicios,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        
        <Icon name="gamepad" size={30} color={tintColor} />
      ),
      title:'HERRAMIENTAS',
      
    },
  },
  
  Tunnerr: {
    screen: Tunnerr,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        
        <Icon name="headphones" size={30} color={tintColor} />
      ),
      title:'TUNNER',
      
    },
  },
  Perfil: {
    screen: StackPerfil2,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        
        <Icon name="user" size={30} color={tintColor} />
      ),
      title:'PERFIL',

    },
  },

 
 
  /* StackArauz: {
    screen: StackArauz,
    navigationOptions:{
      
      headerTintColor: "#fff",
      tabBarLabel:'AUDITIVOS',
      shifting : 'true',
      tabBarColor:'#0065ff',
      activeColor: '#fff',
      inactiveColor: '#1e9b1e',
      tabBarIcon:({tintColor})=>(
        <View>
       <Icon name="home" color='white' size={25}/>  
       </View>)
   },
  },
  
 /* EntrenamientoRitmo: {
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
        <Icon name="customer-service" color='white' size={25}/>  
        </View>
    ),
    },
  },*/
/* StackEjercicios: {
    screen: StackEjercicios,
    navigationOptions:{
      //headerShown: false,
      tabBarLabel:'EJERCICIOS',
      
      //tabBarBadge:'string',
      activeColor: '#fff',
      inactiveColor: '#1e9b1e',
      tabBarColor:'#0065ff',
      tabBarIcon:({tintColor})=>(
        <View>
      <Icon name='trophy' color='white' size={25}/>  
      
       </View>
             ),
   },
  },
  Perfil: {
    screen: StackPerfil,
    navigationOptions:{
     tabBarLabel:'PERFIL',
      activeColor: '#fff',
      pressColor :'red',
      inactiveColor: '#1e9b1e',
      tabBarColor:'#0065ff',
     // barStyle={ { paddingBottom: 10 }},
      tabBarIcon:({tintColor})=>(
        <View>
       <Icon name="user" color='white' size={25}/>  
       </View>
        ),
      
   },
  },*/
  
},{
  tabBarPosition: 'bottom',
  swipeEnabled:true,
  tabBarOptions:{    
    activeTintColor: 'yellow',  
    showIcon: true,
    style:{
      backgroundColor:'#7387f5'
    },
    tabStyle: {
      height:49,
    },
    labelStyle: {
      fontSize: 10,
    },
  }
},
);

RutasGenerales.navigationOptions = ({ navigation }) => {
 // console.log('navigation:',JSON.stringify( navigation));
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};


