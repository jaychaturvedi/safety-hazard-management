import React, {Component} from 'react';
import {InputGroup, Input, Icon, Text, View} from 'native-base';
import { Image } from 'react-native';
import SearchIcon from '../../../assets/svg/search-icon';
export default class SearchBarExample extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: 'white',
          borderColor: '#D0D0DA',
          borderWidth: 1,
          borderRadius: 8,
        }}>
        <InputGroup
          style={{
            justifyContent: 'center',
            height: '100%',
          }}>
          <Input
            placeholder="search here"
            placeholderTextColor="#D0D0DA"
            style={{
              // opacity: 0.7,
              fontSize: 16,
            }}
          />
          <SearchIcon
            style={{
              marginRight: 10,
            }}
          />
        </InputGroup>
      </View>
    );
  }
}
