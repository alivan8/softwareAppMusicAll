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
import PianoRollToy from './toys/PianoRollToy';
import GuitarNeckToy from './toys/GuitarToy';
import ListaTemasPractica from './ListaTemasPractica';
import VerTemaPractica from './VerTemaPractica';
import ListaCursos from './curso/ListaCursos';
import Login from './Login';
import SignUp from './SignUp';

// cursos
import ListaCardsCursos from './curso/ListaCardsCursos';
import TemarioCurso from './curso/TemarioCurso';
import VerTema from './curso/VerTema';
import NavegadorTema from './curso/NavegadorTema';

// mapa de rutas de navegación
const navRouteMap = {
  Welcome: {
    screen: Welcome
  },
  PianoRollToy: {
    screen: PianoRollToy
  },
  GuitarNeckToy: {
    screen: GuitarNeckToy
  },
  ListaTemasPractica: {
    screen: ListaTemasPractica
  },
  VerTemaPractica: {
    screen: VerTemaPractica
  },
  ListaCursos: {
    screen: ListaCursos
  },
  Login: {
    screen: Login
  },
  SignUp: {
    screen: SignUp
  },
  ListaCardsCursos: {
    screen: ListaCardsCursos
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


