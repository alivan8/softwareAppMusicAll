/**
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// importando las demás vistas

import Welcome from '../views/Welcome';
import PianoRollDemo from '../views/PianoRollDemo';
import GuitarNeckDemo from '../views/GuitarNeckDemo';
import ListaTemasPractica from '../views/ListaTemasPractica';
import VerTemaPractica from '../views/VerTemaPractica';
import ListaCursos from '../views/curso/ListaCursos';
import Login from '../views/Login';
import SignUp from '../views/SignUp';

// cursos
import ListaCardsCursos from '../views/curso/ListaCardsCursos';
import TemarioCurso from '../views/curso/TemarioCurso';
import VerTema from '../views/curso/VerTema';
import NavegadorTema from '../views/curso/NavegadorTema';

const navRouteMap = {
  Welcome: {
    screen: Welcome
  },
  PianoRollDemo: {
    screen: PianoRollDemo
  },
  GuitarNeckDemo: {
    screen: GuitarNeckDemo
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
  }
};

const navOptions = {
  defaultNavigationOptions : {
    headerTintColor: '#FCFCFC', // color de la fuente
    headerStyle: {
      backgroundColor: 'blue' // color de fondo del actionBar
    }
  },
  initialScreen: 'Welcome'
};

const StackNavigator = createStackNavigator(navRouteMap, navOptions);
const AppContainer = createAppContainer(StackNavigator);

export default class AppArauz extends Component {
  render() {
    return <AppContainer/>
  }
}
