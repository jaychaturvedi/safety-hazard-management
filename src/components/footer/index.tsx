import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Footer} from 'native-base';
import Tab, {TFooterItem} from './tab';

const styles = StyleSheet.create({
  icon: {
    width: 18,
    height: 18,
  },
});

type Props = {
  selectedItem: TFooterItem;
  onItemSelect: (item: TFooterItem) => void;
};

type State = {};

export default class FooterNav extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  onItemSelect = (item: TFooterItem) => {
    this.props.onItemSelect(item);
  };

  render() {
    return (
      <Footer style={{height: 50}}>
        <Tab
          onItemSelect={this.onItemSelect}
          selectedItem={this.props.selectedItem}
        />
      </Footer>
    );
  }
}
