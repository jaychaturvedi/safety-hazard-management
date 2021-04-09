import React from 'react';
import {Button, Text} from 'native-base';
import {StyleSheet} from 'react-native';

export default function TabButton(props: any) {
  return (
    <Button
      {...props}
      style={[
        {
          height: 40,
          width: props.width,
          borderColor: '#BBBBBB',
          justifyContent: 'center',
        },
        props.first
          ? styles.leftButtomRadius
          : props.last
          ? styles.rightButtomRadius
          : {},
        {
          backgroundColor:
            props.number == props.selectedTab ? '#175BA4' : '#F5F6F7',
        },
      ]}
      onPress={() => props.setSelectedTabSetter(props.number)}>
      <Text
        style={[
          {
            fontSize: 16,
            fontWeight: props.number == props.selectedTab ? 'bold' : undefined,
          },
          {color: props.number == props.selectedTab ? '#fff' : 'black'},
        ]}>
        {props.children}
      </Text>
    </Button>
  );
}

const styles = StyleSheet.create({
  leftButtomRadius: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  centerButtonRadius: {},
  rightButtomRadius: {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
});
