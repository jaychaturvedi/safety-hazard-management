import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text,
  View,
} from 'native-base';
import {TouchableOpacity} from 'react-native';
import RaiseHazardStack from './raise-hazard';
import RaiseIncidentStack from './raise-incident';
import MenuStack from './menu';
import RaiseScreen from '../screens/raise';
import HomeStack from './home';
import MyActionStack from './my-action';
import AllIssuesStack from './all-issues';
import FooterNav from '../components/footer/index';
import {TFooterItem} from '../components/footer/tab';
import Modal from 'react-native-modal';

interface Props {}

type State = {
  screen: TFooterItem;
  hideFooter?: boolean;
  isModalVisible: boolean;
};

export default class FooterNavigation extends React.PureComponent<
  Props,
  State
> {
  constructor(props: Props) {
    super(props);
    this.state = {
      screen: 'home',
      hideFooter: undefined,
      isModalVisible: true,
    };
  }

  toggleModal = (visible: boolean) => {
    this.setState({isModalVisible: visible});
  };

  renderScreen(screen: TFooterItem) {
    switch (screen) {
      case 'home':
        return <HomeStack />;
      case 'myAction':
        return <MyActionStack />;
      case 'raiseHazard':
        return <RaiseHazardStack />;
      case 'raiseIncident':
        return <RaiseIncidentStack />;
      case 'allIssues':
        return <AllIssuesStack />;
      case 'more':
        return <MenuStack />;
      default:
        return <HomeStack />;
    }
  }
  render() {
    return (
      <View style={{height: '100%'}}>
        <View style={{flex: 1}}>{this.renderScreen(this.state.screen)}</View>
        {!this.state.hideFooter && (
          <FooterNav
            onItemSelect={item => {
              this.setState({screen: item});
              console.log('item pressed', item);
            }}
            selectedItem={this.state.screen}
          />
        )}
      </View>
    );
  }
}
