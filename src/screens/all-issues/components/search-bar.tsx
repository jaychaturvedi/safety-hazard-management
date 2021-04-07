import React, {Component} from 'react';
import {InputGroup, Input, Icon, Text, View} from 'native-base';
import { Image } from 'react-native';

export default class SearchBarExample extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: 'white',
          borderColor: '#D0D0DA',
          borderWidth: 1,
        }}>
        <InputGroup>
          <Input
            placeholder="search here"
            style={{
              color: 'rgba(208, 208, 218, 1)',
              // opacity: 0.7,
              fontSize: 16,
            }}
          />
          {/* <Icon name="ios-search" />
           */}
          <Image
            source={require('../../../assets/svg/search-icon.png')}
            style={{
              marginRight: 10,
            }}
          />
        </InputGroup>
      </View>
    );
  }
}
