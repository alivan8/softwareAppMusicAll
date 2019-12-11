import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

export default function Separator() {
  return (
    <View
      style={{
        marginVertical: 8,
        borderBottomColor: 'silver',
        borderBottomWidth: StyleSheet.hairlineWidth,
      }}
    />
  );
}