import React, {Component, useState} from 'react';
import {Input} from 'native-base';
import {StyleSheet, View} from 'react-native';

export default function InputComponent(props: {
  placeHolder: string;
  marginHorizontal: number;
  height: number;
}) {
  return (
    <View
      style={{
        backgroundColor: 'white',
        borderColor: '#D0D0DA',
        borderWidth: 1,
        borderRadius: 8,
        height: props.height,
      }}>
      <Input
        placeholder={props.placeHolder}
        placeholderTextColor="#D0D0DA"
        style={{
          // opacity: 0.7,
          marginHorizontal: props.marginHorizontal,
          fontSize: 16,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  tabsWrapper: {
    backgroundColor: '#F5F6F7',
    width: '100%',
    // paddingTop: 20
  },
});
