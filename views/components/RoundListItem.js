import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity
} from 'react-native';

export default class RoundListItem extends Component {

  constructor(Props) {
    super(Props);
  }

  // recordatorio: los métodos de una clase en JS no necesitan
  // llevar la keyword "function"
  render() {
    console.log('Redondo'+JSON.stringify(this.props));
    console.log('varProps'+JSON.stringify(this.props.varProps));
    return (
      <View style={styles.itemContainer}>
      
        <View style={styles.backgroundCircle}>
            <Image source={{ uri: 'music_study' }} style={styles.squaredImage75} />
        </View>

        <View style={styles.itemTextView}>
            <Text style={styles.title}>{this.props.title}</Text>
        </View>

      </View>
    );
  }

  scream(){
    Alert.alert('DontTouchMe!', `You just touched ${this.props.title}!`);
  }

}

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    width: 160,
    // marginVertical: 3,
    margin: 10,
    // solo usados para debug de UI:
    // borderWidth: 1,
    // borderColor: 'black'
  },
  backgroundCircle:{
    height: 160,
    width: 160,
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'limegreen',
    borderColor: 'green',
    borderRadius: 160/2,
    borderWidth: 10,
  },
  itemTextView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // solo usados para debug de UI:
    // borderWidth: 1,
    // borderColor: 'black'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    // textAlign: 'left',
    // margin: 3,
  },
  descript: {
    fontSize: 14,
    // margin: 3,
  },
  itemIconView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // solo usados para debug de UI:
    // borderWidth: 1,
    // borderColor: 'black'
  },
  squaredImage75: {
    height: 75,
    width: 75,
    margin: 1,
    // solo usados para debug de UI:
    // borderWidth: 1,
    // borderColor: 'black'
  },
});