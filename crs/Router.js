import React from 'react';
import { View, Text, StatusBar, TouchableOpacity, YellowBox } from 'react-native';
import { createSwitchNavigator ,createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import {
  Icon,
  Button,
  Header,
  Left,
  Body,
  Right,
  Title,
  Item,
  Input
} from 'native-base';

import Login from './screens/Login';
import Home from './screens/Home';
import CarCreate from './screens/CarCreate';
import CarEdit from './screens/CarEdit';

import AuthLoadingScreen from './screens/AuthLoadingScreen';
import colors from './styles/colors';



const MainScreen = createStackNavigator(
  {
    Home: {
      screen: Home,

    },
    CarCreate: {
      screen: CarCreate,
      navigationOptions: {
        title: 'Create',
      }
    },
    CarEdit: {
      screen: CarEdit,
      navigationOptions: {
        title: 'Modify',
      }
    }

  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: colors.default,
        elevation: 0
      },
      headerTintColor: colors.white,
    }
  }
);

//const mainScreen = createAppContainer(MainScreen);

const AppNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: MainScreen,
    Auth: createStackNavigator(
    {
      Login: {
        screen: Login,
        navigationOptions: {
          title: 'Login',
        }
      }
    })
  },
  {
    initialRouteName: 'AuthLoading',
  }
);

const AppContainer =createAppContainer(AppNavigator);
export default AppContainer;