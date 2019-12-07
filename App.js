import React, { Component } from 'react';
import { Root } from 'native-base';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './crs/reducers';

import { View, Text,Button } from 'react-native'
import {RutasGenerales} from './componentes/RutasGenerales';
import {createAppContainer} from 'react-navigation';
import Router from './crs/Router';



const RutasGen = createAppContainer(RutasGenerales);
class App extends Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
     
              
            <Provider store={store}>
              <Root>
                <Router />
              </Root>
            </Provider>
      
    );
  }
}

export default App
