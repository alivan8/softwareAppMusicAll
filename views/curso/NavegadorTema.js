import React, {Component} from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

// rutas
import VerTema from './VerTema';
import ListaTareas from './ListaTareas';
import ListaExamenes from './ListaExamenes';
import ListaMaterialesApoyo from './ListaMaterialesApoyo';


const navRouteMap = {
  VerTema: {
    screen: VerTema
  },
  ListaTareas: {
    screen: ListaTareas
  },
  ListaExamenes: {
    screen: ListaExamenes
  },
  ListaMaterialesApoyo: {
    screen: ListaMaterialesApoyo
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
// const AppContainer = createAppContainer(TopTabNavigator);

// export default AppContainer;
export default TopTabNavigator;