import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  ToastAndroid
} from 'react-native';
import { Player } from '@react-native-community/audio-toolkit';


export default class GuitarNeck extends Component {

  constructor(props) {
    super(props);


    // preload sounds
    this.sound = {};
    const soundList = [
      '10','11','12','13','14','15',
      '20','21','22','23','24','25',
      '30','31','32','33','34','35',
      '40','41','42','43','44','45',
      '50','51','52','53','54','55',
      '60','61','62','63','64','65'
    ];
    // const soundList = [
    //   "guitar_10.mp3", "guitar_11.mp3", "guitar_12.mp3", "guitar_13.mp3", "guitar_14.mp3", "guitar_15.mp3",
    //   "guitar_20.mp3", "guitar_21.mp3", "guitar_22.mp3", "guitar_23.mp3", "guitar_24.mp3", "guitar_25.mp3",
    //   "guitar_30.mp3", "guitar_31.mp3", "guitar_32.mp3", "guitar_33.mp3", "guitar_34.mp3", "guitar_35.mp3",
    //   "guitar_40.mp3", "guitar_41.mp3", "guitar_42.mp3", "guitar_43.mp3", "guitar_44.mp3", "guitar_45.mp3",
    //   "guitar_50.mp3", "guitar_51.mp3", "guitar_52.mp3", "guitar_53.mp3", "guitar_54.mp3", "guitar_55.mp3",
    //   "guitar_60.mp3", "guitar_61.mp3", "guitar_62.mp3", "guitar_63.mp3", "guitar_64.mp3", "guitar_65.mp3",
    // ];
    soundList.forEach((note) => {
      this.sound[note] = new Player('guitar_' + note + '.mp3', { autoDestroy: false });
      // this.sound[note].prepare();
    });


    // backgroundColor
    this.state = {
      color10: "#FFFFA0",
      color11: "#4f3d21",
      color12: "#4f3d21",
      color13: "#4f3d21",
      color14: "#4f3d21",
      color15: "#4f3d21",
      color20: "#FFFFA0",
      color21: "#4f3d21",
      color22: "#4f3d21",
      color23: "#4f3d21",
      color24: "#4f3d21",
      color25: "#4f3d21",
      color30: "#FFFFA0",
      color31: "#4f3d21",
      color32: "#4f3d21",
      color33: "#4f3d21",
      color34: "#4f3d21",
      color35: "#4f3d21",
      color40: "#FFFFA0",
      color41: "#4f3d21",
      color42: "#4f3d21",
      color43: "#4f3d21",
      color44: "#4f3d21",
      color45: "#4f3d21",
      color50: "#FFFFA0",
      color51: "#4f3d21",
      color52: "#4f3d21",
      color53: "#4f3d21",
      color54: "#4f3d21",
      color55: "#4f3d21",
      color60: "#FFFFA0",
      color61: "#4f3d21",
      color62: "#4f3d21",
      color63: "#4f3d21",
      color64: "#4f3d21",
      color65: "#4f3d21",
    };
  }


  render() {
    // crear un cuello de guitarra con 5 trastes
    return (
      <View style={styles.container}>

        <View style={styles.guitarNeckView} elevation={10}>

          <View style={styles.fretView}>
            <View
              style={{ ...styles.fretSegmentView, backgroundColor: this.state.color60 }}
              onTouchStart={() => { this.tocar('60') }}
              onTouchEnd={() => { this.soltar('60') }}>
            </View>
            <View
              style={{ ...styles.fretSegmentView, backgroundColor: this.state.color50 }}
              onTouchStart={() => { this.tocar('50') }}
              onTouchEnd={() => { this.soltar('50') }}>
            </View>
            <View
              style={{ ...styles.fretSegmentView, backgroundColor: this.state.color40 }}
              onTouchStart={() => { this.tocar('40') }}
              onTouchEnd={() => { this.soltar('40') }}>
            </View>
            <View
              style={{ ...styles.fretSegmentView, backgroundColor: this.state.color30 }}
              onTouchStart={() => { this.tocar('30') }}
              onTouchEnd={() => { this.soltar('30') }}>
            </View>
            <View
              style={{ ...styles.fretSegmentView, backgroundColor: this.state.color20 }}
              onTouchStart={() => { this.tocar('20') }}
              onTouchEnd={() => { this.soltar('20') }}>
            </View>
            <View
              style={{ ...styles.fretSegmentView, backgroundColor: this.state.color10 }}
              onTouchStart={() => { this.tocar('10') }}
              onTouchEnd={() => { this.soltar('10') }}>
            </View>
          </View>

          <View style={styles.fretSeparatorView}></View>

          <View style={styles.fretView}>
            <View
              style={{ ...styles.fretSegmentView, backgroundColor: this.state.color61 }}
              onTouchStart={() => { this.tocar('61') }}
              onTouchEnd={() => { this.soltar('61') }}>
            </View>
            <View
              style={{ ...styles.fretSegmentView, backgroundColor: this.state.color51 }}
              onTouchStart={() => { this.tocar('51') }}
              onTouchEnd={() => { this.soltar('51') }}>
            </View>
            <View
              style={{ ...styles.fretSegmentView, backgroundColor: this.state.color41 }}
              onTouchStart={() => { this.tocar('41') }}
              onTouchEnd={() => { this.soltar('41') }}>
            </View>
            <View
              style={{ ...styles.fretSegmentView, backgroundColor: this.state.color31 }}
              onTouchStart={() => { this.tocar('31') }}
              onTouchEnd={() => { this.soltar('31') }}>
            </View>
            <View
              style={{ ...styles.fretSegmentView, backgroundColor: this.state.color21 }}
              onTouchStart={() => { this.tocar('21') }}
              onTouchEnd={() => { this.soltar('21') }}>
            </View>
            <View
              style={{ ...styles.fretSegmentView, backgroundColor: this.state.color11 }}
              onTouchStart={() => { this.tocar('11') }}
              onTouchEnd={() => { this.soltar('11') }}>
            </View>
          </View>

          <View style={styles.fretSeparatorView}></View>

          <View style={styles.fretView}>
            <View
              style={{ ...styles.fretSegmentView, backgroundColor: this.state.color62 }}
              onTouchStart={() => { this.tocar('62') }}
              onTouchEnd={() => { this.soltar('62') }}>
            </View>
            <View
              style={{ ...styles.fretSegmentView, backgroundColor: this.state.color52 }}
              onTouchStart={() => { this.tocar('52') }}
              onTouchEnd={() => { this.soltar('52') }}>
            </View>
            <View
              style={{ ...styles.fretSegmentView, backgroundColor: this.state.color42 }}
              onTouchStart={() => { this.tocar('42') }}
              onTouchEnd={() => { this.soltar('42') }}>
            </View>
            <View
              style={{ ...styles.fretSegmentView, backgroundColor: this.state.color32 }}
              onTouchStart={() => { this.tocar('32') }}
              onTouchEnd={() => { this.soltar('32') }}>
            </View>
            <View
              style={{ ...styles.fretSegmentView, backgroundColor: this.state.color22 }}
              onTouchStart={() => { this.tocar('22') }}
              onTouchEnd={() => { this.soltar('22') }}>
            </View>
            <View
              style={{ ...styles.fretSegmentView, backgroundColor: this.state.color12 }}
              onTouchStart={() => { this.tocar('12') }}
              onTouchEnd={() => { this.soltar('12') }}>
            </View>
          </View>

          <View style={styles.fretSeparatorView}></View>

          <View style={styles.fretView}>
            <View
              style={{ ...styles.fretSegmentView, backgroundColor: this.state.color63 }}
              onTouchStart={() => { this.tocar('63') }}
              onTouchEnd={() => { this.soltar('63') }}>
            </View>
            <View
              style={{ ...styles.fretSegmentView, backgroundColor: this.state.color53 }}
              onTouchStart={() => { this.tocar('53') }}
              onTouchEnd={() => { this.soltar('53') }}>
            </View>
            <View
              style={{ ...styles.fretSegmentView, backgroundColor: this.state.color43 }}
              onTouchStart={() => { this.tocar('43') }}
              onTouchEnd={() => { this.soltar('43') }}>
            </View>
            <View
              style={{ ...styles.fretSegmentView, backgroundColor: this.state.color33 }}
              onTouchStart={() => { this.tocar('33') }}
              onTouchEnd={() => { this.soltar('33') }}>
            </View>
            <View
              style={{ ...styles.fretSegmentView, backgroundColor: this.state.color23 }}
              onTouchStart={() => { this.tocar('23') }}
              onTouchEnd={() => { this.soltar('23') }}>
            </View>
            <View
              style={{ ...styles.fretSegmentView, backgroundColor: this.state.color13 }}
              onTouchStart={() => { this.tocar('13') }}
              onTouchEnd={() => { this.soltar('13') }}>
            </View>
          </View>

          <View style={styles.fretSeparatorView}></View>

          <View style={styles.fretView}>
            <View
              style={{ ...styles.fretSegmentView, backgroundColor: this.state.color64 }}
              onTouchStart={() => { this.tocar('64') }}
              onTouchEnd={() => { this.soltar('64') }}>
            </View>
            <View
              style={{ ...styles.fretSegmentView, backgroundColor: this.state.color54 }}
              onTouchStart={() => { this.tocar('54') }}
              onTouchEnd={() => { this.soltar('54') }}>
            </View>
            <View
              style={{ ...styles.fretSegmentView, backgroundColor: this.state.color44 }}
              onTouchStart={() => { this.tocar('44') }}
              onTouchEnd={() => { this.soltar('44') }}>
            </View>
            <View
              style={{ ...styles.fretSegmentView, backgroundColor: this.state.color34 }}
              onTouchStart={() => { this.tocar('34') }}
              onTouchEnd={() => { this.soltar('34') }}>
            </View>
            <View
              style={{ ...styles.fretSegmentView, backgroundColor: this.state.color24 }}
              onTouchStart={() => { this.tocar('24') }}
              onTouchEnd={() => { this.soltar('24') }}>
            </View>
            <View
              style={{ ...styles.fretSegmentView, backgroundColor: this.state.color14 }}
              onTouchStart={() => { this.tocar('14') }}
              onTouchEnd={() => { this.soltar('14') }}>
            </View>
          </View>

          <View style={styles.fretSeparatorView}></View>

          <View style={styles.fretView}>
            <View
              style={{ ...styles.fretSegmentView, backgroundColor: this.state.color65 }}
              onTouchStart={() => { this.tocar('65') }}
              onTouchEnd={() => { this.soltar('65') }}>
            </View>
            <View
              style={{ ...styles.fretSegmentView, backgroundColor: this.state.color55 }}
              onTouchStart={() => { this.tocar('55') }}
              onTouchEnd={() => { this.soltar('55') }}>
            </View>
            <View
              style={{ ...styles.fretSegmentView, backgroundColor: this.state.color45 }}
              onTouchStart={() => { this.tocar('45') }}
              onTouchEnd={() => { this.soltar('45') }}>
            </View>
            <View
              style={{ ...styles.fretSegmentView, backgroundColor: this.state.color35 }}
              onTouchStart={() => { this.tocar('35') }}
              onTouchEnd={() => { this.soltar('35') }}>
            </View>
            <View
              style={{ ...styles.fretSegmentView, backgroundColor: this.state.color25 }}
              onTouchStart={() => { this.tocar('25') }}
              onTouchEnd={() => { this.soltar('25') }}>
            </View>
            <View
              style={{ ...styles.fretSegmentView, backgroundColor: this.state.color15 }}
              onTouchStart={() => { this.tocar('15') }}
              onTouchEnd={() => { this.soltar('15') }}>
            </View>
          </View>

        </View>

      </View>
    );
  }



  // métodos auxiliares
  tocar(nota) {
    ToastAndroid.show('Tocando nota: ' + nota, ToastAndroid.SHORT);

    switch (nota) {
      // primer paso:
      // change backgroundColor
      case "60":
        this.setState({ color60: "red" });
        break;
      case "61":
        this.setState({ color61: "red" });
        break;
      case "62":
        this.setState({ color62: "red" });
        break;
      case "63":
        this.setState({ color63: "red" });
        break;
      case "64":
        this.setState({ color64: "red" });
        break;
      case "65":
        this.setState({ color65: "red" });
        break;

      case "50":
        this.setState({ color50: "red" });
        break;
      case "51":
        this.setState({ color51: "red" });
        break;
      case "52":
        this.setState({ color52: "red" });
        break;
      case "53":
        this.setState({ color53: "red" });
        break;
      case "54":
        this.setState({ color54: "red" });
        break;
      case "55":
        this.setState({ color55: "red" });
        break;

      case "40":
        this.setState({ color40: "red" });
        break;
      case "41":
        this.setState({ color41: "red" });
        break;
      case "42":
        this.setState({ color42: "red" });
        break;
      case "43":
        this.setState({ color43: "red" });
        break;
      case "44":
        this.setState({ color44: "red" });
        break;
      case "45":
        this.setState({ color45: "red" });
        break;

      case "30":
        this.setState({ color30: "red" });
        break;
      case "31":
        this.setState({ color31: "red" });
        break;
      case "32":
        this.setState({ color32: "red" });
        break;
      case "33":
        this.setState({ color33: "red" });
        break;
      case "34":
        this.setState({ color34: "red" });
        break;
      case "35":
        this.setState({ color35: "red" });
        break;

      case "20":
        this.setState({ color20: "red" });
        break;
      case "21":
        this.setState({ color21: "red" });
        break;
      case "22":
        this.setState({ color22: "red" });
        break;
      case "23":
        this.setState({ color23: "red" });
        break;
      case "24":
        this.setState({ color24: "red" });
        break;
      case "25":
        this.setState({ color25: "red" });
        break;

      case "10":
        this.setState({ color10: "red" });
        break;
      case "11":
        this.setState({ color11: "red" });
        break;
      case "12":
        this.setState({ color12: "red" });
        break;
      case "13":
        this.setState({ color13: "red" });
        break;
      case "14":
        this.setState({ color14: "red" });
        break;
      case "15":
        this.setState({ color15: "red" });
        break;
    }


    // segundo paso
    // play sound
    if (this.sound[nota].isPlaying) {
      // si la nota ya se estaba reproduciendo, detenerla
      this.sound[nota].stop();
      this.sound[nota].play();
    } else {
      this.sound[nota].play();
    }
  }

  soltar(nota) {
    ToastAndroid.show('Soltando nota: ' + nota, ToastAndroid.SHORT);

    switch (nota) {
      case "60":
        this.setState({ color60: "#FFFFA0" });
        break;
      case "61":
        this.setState({ color61: "#4f3d21" });
        break;
      case "62":
        this.setState({ color62: "#4f3d21" });
        break;
      case "63":
        this.setState({ color63: "#4f3d21" });
        break;
      case "64":
        this.setState({ color64: "#4f3d21" });
        break;
      case "65":
        this.setState({ color65: "#4f3d21" });
        break;

      case "50":
        this.setState({ color50: "#FFFFA0" });
        break;
      case "51":
        this.setState({ color51: "#4f3d21" });
        break;
      case "52":
        this.setState({ color52: "#4f3d21" });
        break;
      case "53":
        this.setState({ color53: "#4f3d21" });
        break;
      case "54":
        this.setState({ color54: "#4f3d21" });
        break;
      case "55":
        this.setState({ color55: "#4f3d21" });
        break;

      case "40":
        this.setState({ color40: "#FFFFA0" });
        break;
      case "41":
        this.setState({ color41: "#4f3d21" });
        break;
      case "42":
        this.setState({ color42: "#4f3d21" });
        break;
      case "43":
        this.setState({ color43: "#4f3d21" });
        break;
      case "44":
        this.setState({ color44: "#4f3d21" });
        break;
      case "45":
        this.setState({ color45: "#4f3d21" });
        break;

      case "30":
        this.setState({ color30: "#FFFFA0" });
        break;
      case "31":
        this.setState({ color31: "#4f3d21" });
        break;
      case "32":
        this.setState({ color32: "#4f3d21" });
        break;
      case "33":
        this.setState({ color33: "#4f3d21" });
        break;
      case "34":
        this.setState({ color34: "#4f3d21" });
        break;
      case "35":
        this.setState({ color35: "#4f3d21" });
        break;

      case "20":
        this.setState({ color20: "#FFFFA0" });
        break;
      case "21":
        this.setState({ color21: "#4f3d21" });
        break;
      case "22":
        this.setState({ color22: "#4f3d21" });
        break;
      case "23":
        this.setState({ color23: "#4f3d21" });
        break;
      case "24":
        this.setState({ color24: "#4f3d21" });
        break;
      case "25":
        this.setState({ color25: "#4f3d21" });
        break;

      case "10":
        this.setState({ color10: "#FFFFA0" });
        break;
      case "11":
        this.setState({ color11: "#4f3d21" });
        break;
      case "12":
        this.setState({ color12: "#4f3d21" });
        break;
      case "13":
        this.setState({ color13: "#4f3d21" });
        break;
      case "14":
        this.setState({ color14: "#4f3d21" });
        break;
      case "15":
        this.setState({ color15: "#4f3d21" });
        break;
    }


    // 2do paso: stop sound
    // gradually decrease the volume
    /* for (let i = 0; i < 10; i++) {
      setTimeout(() => {
        this.sound[note].volume = (1.0 - i / 10)},
        100);
      }
      this.sound[note].stop();
      this.sound[note].volume = (1.0); 
    }
    */
  }


}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  guitarNeckView: {
    backgroundColor: '#4f3d21',
    width: '100%',
    height: '90%',
    flexDirection: "row",
    borderTopColor: '#3b2d18',
    borderTopWidth: 5,
    borderBottomColor: '#3b2d18',
    borderBottomWidth: 5,
  },
  fretView: {
    flexDirection: 'column',
    justifyContent: 'center',
    // width: 60,
    flex: 1,
    height: '100%',
    // ahora el borde del traste
    // borderRightColor: 'black',
    // borderRightWidth: 2
  },
  fretSeparatorView: {
    height: '100%',
    width: 0,
    borderLeftWidth: 2,
    borderLeftColor: 'silver',
    borderRightWidth: 1,
    borderRightColor: 'gray',
  },
  fretSegmentView: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: '16%',
    width: '100%',
    // para debugear:
    borderColor: 'red',
    borderWidth: StyleSheet.hairlineWidth
  },
  stringSegmentView: {
    // TODO: ver la manera de hacer un patrón de textura de cuerda
    backgroundColor: 'blue',
    height: 5,
    width: '100%'
  },
  boneView: {
    backgroundColor: '#FFFFA0',
    width: 10,
    borderRightColor: '#FFD36F',
    borderRightWidth: 2,
    borderBottomColor: '#FFD36F',
    borderBottomWidth: 2
  }
});