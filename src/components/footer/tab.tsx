import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {FooterTab, Icon} from 'native-base';
import FooterItem from './footer-item';
import {Button, Text, View, TouchableOpacity} from 'react-native';
import Raise from '../../screens/raise';
export type TFooterItem =
  | 'home'
  | 'myAction'
  | 'raiseHazard'
  | 'more'
  | 'allIssues'
  | 'raiseIncident';

const styles = StyleSheet.create({
  footerTab: {backgroundColor: 'white'},
  iconSelected: {height: 28, width: 28},
  icon: {height: 28, width: 28, opacity: 0.5},
});

type Props = {
  selectedItem: TFooterItem;
  onItemSelect: (item: TFooterItem) => void;
};

export default class Tab extends React.PureComponent<
  Props,
  {
    isModalVisible: boolean;
  }
> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isModalVisible: false,
    };
  }

  toggleModal = (visible: boolean) => {
    this.setState({isModalVisible: visible});
  };
  render() {
    return (
      <FooterTab style={{...styles.footerTab}}>
        <FooterItem
          text={'Home'}
          icon={
            <Image
              source={require('../../assets/icons/home.png')}
              style={
                this.props.selectedItem === 'home'
                  ? styles.iconSelected
                  : styles.icon
              }
            />
          }
          onPress={() => {
            console.log('Home pressed');
            this.props.onItemSelect('home');
          }}
        />
        <FooterItem
          text={'My Actions'}
          icon={
            <Image
              source={require('../../assets/icons/ride_statistics.png')}
              style={
                this.props.selectedItem === 'myAction'
                  ? styles.iconSelected
                  : styles.icon
              }
            />
          }
          onPress={() => {
            console.log('myAction pressed');
            this.props.onItemSelect('myAction');
          }}
        />
        <View
          style={{
            flex: 1,
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              elevation: 0,
              flex: 1,
              alignItems: 'center',
            }}
            onPress={() => {
              this.toggleModal(true);
            }}>
            <Image
              source={require('../../assets/icons/find_my_cycle.png')}
              style={
                this.props.selectedItem === 'raiseHazard' ||
                this.props.selectedItem === 'raiseIncident'
                  ? styles.iconSelected
                  : styles.icon
              }
            />
            <Text>Raise</Text>
            <Raise
              onItemSelect={this.props.onItemSelect}
              toggleModal={this.toggleModal}
              isModalVisible={this.state.isModalVisible}
            />
          </TouchableOpacity>
        </View>
        <FooterItem
          text={'All Issues'}
          icon={
            <Image
              source={require('../../assets/icons/find_my_cycle.png')}
              style={
                this.props.selectedItem === 'allIssues'
                  ? styles.iconSelected
                  : styles.icon
              }
            />
          }
          onPress={() => this.props.onItemSelect('allIssues')}
        />
        <FooterItem
          text={'More'}
          icon={
            <Image
              source={require('../../assets/icons/hamburger_menu.png')}
              style={
                this.props.selectedItem === 'more'
                  ? styles.iconSelected
                  : styles.icon
              }
            />
          }
          onPress={() => this.props.onItemSelect('more')}
        />
      </FooterTab>
    );
  }
}
