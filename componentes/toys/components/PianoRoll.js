import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import { Player } from '@react-native-community/audio-toolkit';


export default class PianoRoll extends Component {

  constructor(props) {
    super(props);

    // preload sounds
    this.sound = {};
    const soundList = ["c", "cs", "d", "ds", "e", "f", "fs", "g", "gs", "a", "as", "b"];
    soundList.forEach(note => {
      this.sound[note] = new Player(note + '.mp3', {autoDestroy: false});
      // this.sound[note].prepare();
    });

    // backgroundColor
    this.state = {
      colorC: "white",
      colorCs: "black",
      colorD: "white",
      colorDs: "black",
      colorE: "white",
      colorF: "white",
      colorFs: "black",
      colorG: "white",
      colorGs: "black",
      colorA: "white",
      colorAs: "black",
      colorB: "white",
    }
  }

  stroke(note) {
    // primer paso:
    // change backgroundColor
    switch (note) {
      case "c":
        this.setState({ colorC: "rgba(1, 1, 1, 0.1)" });
        break;
      case "cs":
        this.setState({ colorCs: "rgba(0, 0, 0, 0.5)" });
        break;
      case "d":
        this.setState({ colorD: "rgba(1, 1, 1, 0.1)" });
        break;
      case "ds":
        this.setState({ colorDs: "rgba(0, 0, 0, 0.5)" });
        break;
      case "e":
        this.setState({ colorE: "rgba(1, 1, 1, 0.1)" });
        break;
      case "f":
        this.setState({ colorF: "rgba(1, 1, 1, 0.1)" });
        break;
      case "fs":
        this.setState({ colorFs: "rgba(0, 0, 0, 0.5)" });
        break;
      case "g":
        this.setState({ colorG: "rgba(1, 1, 1, 0.1)" });
        break;
      case "gs":
        this.setState({ colorGs: "rgba(0, 0, 0, 0.5)" });
        break;
      case "a":
        this.setState({ colorA: "rgba(1, 1, 1, 0.1)" });
        break;
      case "as":
        this.setState({ colorAs: "rgba(0, 0, 0, 0.5)" });
        break;
      case "b":
        this.setState({ colorB: "rgba(1, 1, 1, 0.1)" });
        break;
    }
    
    // segundo paso
    // play sound
    this.sound[note].play();
  }


  stop(note) {
    // primer paso
    // change backgroundColor
    switch (note) {
      case "c":
        this.setState({ colorC: "white" })
        break;
      case "cs":
        this.setState({ colorCs: "black" })
        break;
      case "d":
        this.setState({ colorD: "white" })
        break;
      case "ds":
        this.setState({ colorDs: "black" })
        break;
      case "e":
        this.setState({ colorE: "white" })
        break;
      case "f":
        this.setState({ colorF: "white" })
        break;
      case "fs":
        this.setState({ colorFs: "black" })
        break;
      case "g":
        this.setState({ colorG: "white" })
        break;
      case "gs":
        this.setState({ colorGs: "black" })
        break;
      case "a":
        this.setState({ colorA: "white" })
        break;
      case "as":
        this.setState({ colorAs: "black" })
        break;
      case "b":
        this.setState({ colorB: "white" })
        break;
    }

    // stop sound
    // gradually decrease the volume
    /* for (let i = 0; i < 10; i++) {
      setTimeout(() => {
        this.sound[note].volume = (1.0 - i / 10)},
        100);
    }
    this.sound[note].stop();
    this.sound[note].volume = (1.0); */
    if (this.sound[note].isPlaying){
      this.sound[note].stop();
      this.sound[note].play();
      
    }else{
      this.sound[note].play();
    }
  }

  // nota: las teclas negras (semitonos) son subnodos o hijas de las notas blancas
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, flexDirection: "column", alignItems: "center" }}>
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>

            <View
              style={{ backgroundColor: "white", height: 100, width: 32, borderLeftWidth: 1, borderTopWidth: 1, }} >
            </View >
            <View
              onTouchStart={() => this.stroke("cs")}
              onTouchEnd={() => this.stop("cs")}
              style={{ backgroundColor: this.state.colorCs, height: 100, width: 32, borderTopWidth: 1, borderLeftWidth: 1, }} >
            </View >
            <View
              style={{ backgroundColor: "white", height: 100, width: 16, borderTopWidth: 1, }} >
            </View >
            <View
              onTouchStart={() => this.stroke("ds")}
              onTouchEnd={() => this.stop("ds")}
              style={{ backgroundColor: this.state.colorDs, height: 100, width: 32, borderTopWidth: 1, borderLeftWidth: 1, }} >
            </View >
            <View
              style={{ backgroundColor: "white", height: 100, width: 32, borderTopWidth: 1, }} >
            </View >
            <View
              style={{ backgroundColor: "white", height: 100, width: 32, borderTopWidth: 1, borderLeftWidth: 1, }} >
            </View >
            <View
              onTouchStart={() => this.stroke("fs")}
              onTouchEnd={() => this.stop("fs")}
              style={{ backgroundColor: this.state.colorFs, height: 100, width: 32, borderTopWidth: 1, }} >
            </View >
            <View
              style={{ backgroundColor: "white", height: 100, width: 16, borderTopWidth: 1, }} >
            </View >
            <View
              onTouchStart={() => this.stroke("gs")}
              onTouchEnd={() => this.stop("gs")}
              style={{ backgroundColor: this.state.colorGs, height: 100, width: 32, borderTopWidth: 1, }} >
            </View >
            <View
              style={{ backgroundColor: "white", height: 100, width: 16, borderTopWidth: 1, }} >
            </View >
            <View
              onTouchStart={() => this.stroke("as")}
              onTouchEnd={() => this.stop("as")}
              style={{ backgroundColor: this.state.colorAs, height: 100, width: 32, borderTopWidth: 1, }} >
            </View >
            <View
              style={{ backgroundColor: "white", height: 100, width: 32, borderRightWidth: 1, borderTopWidth: 1, }} >
            </View >

          </View>

          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>

            <View
              onTouchStart={() => this.stroke("c")}
              onTouchEnd={() => this.stop("c")}
              style={{ backgroundColor: this.state.colorC, height: 100, width: 48, borderBottomWidth: 1, borderLeftWidth: 1 }} >
            </View >
            <View
              onTouchStart={() => this.stroke("d")}
              onTouchEnd={() => this.stop("d")}
              style={{ backgroundColor: this.state.colorD, height: 100, width: 48, borderBottomWidth: 1, borderLeftWidth: 1 }} >
            </View >
            <View
              onTouchStart={() => this.stroke("e")}
              onTouchEnd={() => this.stop("e")}
              style={{ backgroundColor: this.state.colorE, height: 100, width: 48, borderBottomWidth: 1, borderLeftWidth: 1 }} >
            </View >
            <View
              onTouchStart={() => this.stroke("f")}
              onTouchEnd={() => this.stop("f")}
              style={{ backgroundColor: this.state.colorF, height: 100, width: 48, borderBottomWidth: 1, borderLeftWidth: 1 }} >
            </View >
            <View
              onTouchStart={() => this.stroke("g")}
              onTouchEnd={() => this.stop("g")}
              style={{ backgroundColor: this.state.colorG, height: 100, width: 48, borderBottomWidth: 1, borderLeftWidth: 1 }} >
            </View >
            <View
              onTouchStart={() => this.stroke("a")}
              onTouchEnd={() => this.stop("a")}
              style={{ backgroundColor: this.state.colorA, height: 100, width: 48, borderBottomWidth: 1, borderLeftWidth: 1 }} >
            </View >
            <View
              onTouchStart={() => this.stroke("b")}
              onTouchEnd={() => this.stop("b")}
              style={{ backgroundColor: this.state.colorB, height: 100, width: 48, borderBottomWidth: 1, borderLeftWidth: 1, borderRightWidth: 1 }} >
            </View >

          </View>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: "row",
  },
});