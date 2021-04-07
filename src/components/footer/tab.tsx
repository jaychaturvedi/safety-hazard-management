import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {FooterTab, Icon} from 'native-base';
import FooterItem from './footer-item';

export type TFooterItem = 'home' | 'myAction' | 'raise' | 'more' | 'allIssues';

const styles = StyleSheet.create({
  footerTab: {backgroundColor: 'white'},
  iconSelected: {height: 28, width: 28},
  icon: {height: 28, width: 28, opacity: 0.5},
});

type Props = {
  selectedItem: TFooterItem;
  onItemSelect: (item: TFooterItem) => void;
};

export default class Tab extends React.PureComponent<Props, {}> {
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
        <FooterItem
          text={'Raise'}
          icon={
            <Image
              source={require('../../assets/icons/find_my_cycle.png')}
              style={
                this.props.selectedItem === 'raise'
                  ? styles.iconSelected
                  : styles.icon
              }
            />
          }
          onPress={() => this.props.onItemSelect('raise')}
        />
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
