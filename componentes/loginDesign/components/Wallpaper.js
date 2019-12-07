import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {StyleSheet, Image,View,ImageBackground} from 'react-native';

import bgSrc from '../images/pianopng.png';


export default class Wallpaper extends Component {
  render() {
    return (
      
      <ImageBackground style={styles.picture} source={bgSrc}>
        {this.props.children}
      </ImageBackground>
      
    );
  }
}

const styles = StyleSheet.create({
  picture: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
});
