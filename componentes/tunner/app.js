import React, { Component } from "react";
import {PermissionsAndroid, View, Text, StatusBar, StyleSheet } from "react-native";

import Tuner from "./tuner";
import Note from "./note";
import Meter from "./meter";
export async function requestCameraPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      {
        title: 'Cool Photo App Camera Permission',
        message:
          'Cool Photo App needs access to your camera ' +
          'so you can take awesome pictures.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the camera');
    } else {
      console.log('Camera permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
}


export default class Tunnerr extends Component {
  state = {
    note: {
      name: "A",
      octave: 4,
      frequency: 440
    }
  };

  _update(note) {
    this.setState({ note });
  }
 
  async componentDidMount() {
    await requestCameraPermission()
    const tuner = new Tuner();
    tuner.start();
    tuner.onNoteDetected = note => {
      if (this._lastNoteName === note.name) {
        this._update(note);
      } else {
        this._lastNoteName = note.name;
      }
    };
  }

  render() {
    return (
      <View style={style.body}>
        <StatusBar backgroundColor="#000" translucent />
        <Meter cents={this.state.note.cents} />
        <Note {...this.state.note} />
        <Text style={style.frequency}>
          {this.state.note.frequency.toFixed(1)} Hz
        </Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  frequency: {
    fontSize: 28,
    color: "#37474f"
  }
});
