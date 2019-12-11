import 'react-native-gesture-handler'
import React, { Component } from 'react';
import { Root } from 'native-base';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './crs/reducers';

import { createAppContainer } from 'react-navigation';
import Router from './crs/Router';

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
