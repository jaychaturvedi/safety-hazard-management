import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';

const cardStyles = StyleSheet.create({
  title: {
    color: 'yellow',
    fontSize: 20,
    // lineHeight: 28,
  },
});

type CardProps = {
  title: string;
  image: React.ReactNode;
  color: string;
};
export default class Card extends React.Component<CardProps, {}> {
  render() {
    let props = this.props;
    let Theme = this.context.theme; //load theme from context
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'space-around',
          height: 200,
          backgroundColor: props.color,
          width: '100%',
          borderRadius: 8
        }}>
        <View>
          {props.image}
        </View>
        <Text
          style={{
            ...cardStyles.title,
            color: 'black', //change dark theme
          }}>
          {props.title}
        </Text>
      </View>
    );
  }
}
