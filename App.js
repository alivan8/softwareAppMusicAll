import React from 'react'
import { View, Text,Button } from 'react-native'
import {RutasGenerales} from './componentes/RutasGenerales';
import {createAppContainer} from 'react-navigation';


const RutasGen = createAppContainer(RutasGenerales);
const App = () => {
  return (
    <View style={{flex:1}}>
 
     
     <RutasGen/>
      
    </View>
  )
}

export default App
