import React from 'react';
import {Button, Icon, View} from 'native-base';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

type Props = {
  text: string;
  icon: React.ReactNode;
  onPress?: () => void;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default class FooterItem extends React.Component<Props, {}> {
  render() {
    let props = this.props;
    return (
      <View style={{...styles.container}}>
        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            elevation: 0,
            flex: 1,
            alignItems: 'center',
          }}
          onPress={props.onPress}>
          {props.icon}
          <Text>{props.text}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
