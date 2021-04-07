import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Icon} from 'native-base';

interface Props {
  backgroundColor?: string;
  textColor?: string;
  text: string;
}

export default function FooterItem(props: Props) {
  return (
    <View style={[styles.container, {backgroundColor: props.backgroundColor}]}>
      <Text
        style={{
          color: props.textColor || 'black',
        }}>
        {props.text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 22,
    width: 82,
    // padding:5,
    alignItems: 'center',
    // paddingHorizontal: 10,
    // paddingVertical: 5,
  },
});
