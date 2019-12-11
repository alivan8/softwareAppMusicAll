import React, {Component} from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

// rutas
import VerTema from './VerTema';
import ListarTareas from './ListarTareas';
import ListarExamenes from './ListarExamenes';
import ListarMaterialesApoyo from './ListarMaterialesApoyo';
import { createAppContainer } from 'react-navigation';

const navRouteMap = {
  VerTema: {
    screen: VerTema
  },
  ListarTareas: {
    screen: ListarTareas
  },
  ListarExamenes: {
    screen: ListarExamenes
  },
  ListarMaterialesApoyo: {
    screen: ListarMaterialesApoyo
  }
};

const tabNavConfig = {
  initialScreen: 'VerTema',
  swipeEnabled: true,
  tabBarOptions: {
    style: {
      backgroundColor: 'blue',
    }
  }
};

const TopTabNavigator = createMaterialTopTabNavigator(navRouteMap, tabNavConfig);
const AppContainer = createAppContainer(TopTabNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />
  }
}