import { createStackNavigator } from 'react-navigation-stack';


// import CursoPerfil from './CursoPerfil';
import ListaCursosIncritos from '../views/curso/ListaCursosIncritos';
import Perfil from './Perfil';

const navRoutesMap = {
  Perfil: {
    screen: Perfil,
    navigationOptions: {
      header: null,
    },
  },
  ListaCursosIncritos: {
    screen: ListaCursosIncritos,
  },
};

const navOpts = {
  initialRouteName: 'Perfil',

};

export const StackPerfil2 = createStackNavigator(navRoutesMap, navOpts);