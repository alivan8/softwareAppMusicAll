/**
 * @format
 * @flow
 */

// import React, { Component } from 'react';
// import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { tabAuditivo } from '../componentes/tabAuditivo';

// importando las demás vistas
import Welcome from './Welcome';
import ListaTemasPractica from './ListaTemasPractica';

// cursos
import ListaCursos from './curso/ListaCursos';
import TemarioCurso from './curso/TemarioCurso';
import VerTema from './curso/VerTema';
import NavegadorTema from './curso/NavegadorTema';

// mapa de rutas de navegación
const navRouteMap = {
  Welcome: {
    screen: Welcome,
    
  },
  ListaTemasPractica: {
    screen: ListaTemasPractica
  },
  ListaCursos: {
    screen: ListaCursos
  },
  TemarioCurso: {
    screen: TemarioCurso
  },
  VerTema: {
    screen: VerTema
  },
  NavegadorTema: {
    screen: NavegadorTema
  },
  tabAuditivo: {
    screen: tabAuditivo,
  }
};

// opciones del navegador
const navOptions = {
  
  defaultNavigationOptions: {
    
    headerTintColor: '#FCFCFC', // color de la fuente
    headerStyle: {
      backgroundColor: 'blue' // color de fondo del actionBar
    }
  },
  initialScreen: 'Welcome'
};

export const StackArauz = createStackNavigator(navRouteMap, navOptions);



