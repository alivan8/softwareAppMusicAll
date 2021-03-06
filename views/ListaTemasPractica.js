import React, { Component } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import RoundListItem from './components/RoundListItem';

export default class ListaTemasPractica extends Component {

  constructor(Props) {
    super(Props);

    this.state = {
      items: [
        { title: 'Dia 1', descript: 'Dia del full blast, let it go.' },
        { title: 'Dia 2', descript: 'Dia del alargue, keep going.' },
        { title: 'Dia 3', descript: 'Dia del aguante, dont pussy out.' },
        { title: 'Dia 4', descript: 'Dia del sufrimiento, get thru it.' },
        { title: 'Dia 5', descript: 'Dia del cuestionamiento, is this for me?.' },
        { title: 'Dia 6', descript: 'Dia de la determinación, go for it.' },
        { title: 'Dia 7', descript: 'Dia de la persistencia, keep at it.' },
        { title: 'Dia 8', descript: 'Dia del honor, you got it, you own it.' },
      ]
    };
  }

  render() {
    return (
      <View style={styles.container}>
       
          <ScrollView>
            <View style={{ flex: 1, flexDirection: "column", alignItems: "center" }}>

              <View style={{flex: 1, flexDirection: "row", alignItems: "center"}}>
                <TouchableOpacity 
                style={styles.itemIconView} 
                onPress={ () => {this.props.navigation.navigate('tabAuditivo')}}>
                <RoundListItem title="Tema1" descript="" /> 
                </TouchableOpacity> 
              </View>


              <View style={{flex: 1, flexDirection: "row", alignItems: "center"}}>
                <TouchableOpacity 
                  style={styles.itemIconView} 
                  onPress={ () => {this.props.navigation.navigate('tabAuditivo')}}>
                  <RoundListItem title="Tema 2" descript=""/>  
                  </TouchableOpacity> 
                  <TouchableOpacity 
                  style={styles.itemIconView} 
                  onPress={ () => {this.props.navigation.navigate('tabAuditivo')}}>
                  <RoundListItem title="Tema 3" descript=""/>
                  </TouchableOpacity> 
              </View>

              
              <View style={{flex: 1, flexDirection: "row", alignItems: "center"}}>
                <RoundListItem title="Tema 4" descript=""/>
                <RoundListItem title="Tema 5" descript=""/>
              </View>
              <View style={{flex: 1, flexDirection: "row", alignItems: "center"}}>
                <RoundListItem title="Tema 6" descript=""/>
                <RoundListItem title="Tema 7" descript=""/>
              </View>
            </View>
          </ScrollView>

      </View>
    );
  }

} // end of ListaTemasPractica class

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '#FCFCFC',
  },

  itemIconView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // solo usados para debugear la UI:
    // borderWidth: 1,
    // borderColor: 'black',
  },
});