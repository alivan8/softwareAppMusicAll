import { createStackNavigator } from 'react-navigation-stack';
// vista "lista de ejercicios"
import ListaEjercicios from './ListaEjercicios';

// vistas de juguetes o ejercicios concretos
import PianoToy from './toys/PianoRollToy';
import GuitarToy from './toys/GuitarToy';
import DrumToy from './toys/DrumToy';


// mapa de rutas
const navRoutesMap = {
  ListaEjercicios: {
    screen: ListaEjercicios,
    navigationOptions: {
      // title: 'Toys'
      header: null,  // esconde el headerBar de React Navigation
    },
  },
  PianoToy: {
    screen: PianoToy,
    navigationOptions: {
      header: null  // esconde el headerBar de React Navigation
    }
  },
  GuitarToy: {
    screen: GuitarToy,
    navigationOptions: {
      header: null  // esconde el headerBar de React Navigation
    }
  },
  DrumToy: {
    screen: DrumToy,
    navigationOptions: {
      header: null  // esconde el headerBar de React Navigation
    }
  }
};

// opciones de navegación
const navOpts = {
  initialRouteName: 'ListaEjercicios',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#188bc4',
      elevation: 8,
      shadowOpacity: 0,
    },
    //headerTintColor: '#168a20',
    //headerTitleStyle: {fontWeight: 'bold', color: '#ffffff'}
  }
};

export const StackEjercicios = createStackNavigator(navRoutesMap, navOpts);
