import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity
} from 'react-native';

export default class ListItem extends Component {

  constructor(Props) {
    super(Props);
  }

  // recordatorio: los métodos de una clase en JS no necesitan
  // llevar la keyword "function"
  render() {
    return (
      <TouchableOpacity style={styles.listItemContainer} onPress={ () => {this.scream()}}>

        <View style={styles.listItemIconView}>
          <Image source={{ uri: 'music_study' }} style={styles.imageSquare75} />
        </View>

        <View style={styles.listItemTextView}>
          <Text style={styles.title}>{this.props.title}</Text>
          <Text style={styles.descript}>{this.props.descript}</Text>
        </View>

      </TouchableOpacity>
    );
  }

  scream(){
    Alert.alert('DontTouchMe!', `You just touched ${this.props.title}!`);
  }

}

const styles = StyleSheet.create({
  listItemContainer: {
    flex: 1,
    flexDirection: 'row',
    height: 120,
    width: '90%',
    alignItems: 'center',
    backgroundColor: '#EEEEEE',
    marginVertical: 3,
    borderColor: '#DADADA',
    borderWidth: 1
    //borderRadius: 60
  },
  listItemTextView: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    // textAlign: 'left',
    margin: 3,
  },
  descript: {
    fontSize: 14,
    margin: 3,
  },
  listItemIconView: {
    flex: 1,
    margin: 10
  },
  imageSquare75: {
    height: 75,
    width: 75,
    margin: 1,
    alignSelf: "center"
  },
});