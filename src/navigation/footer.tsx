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
import RaiseStack from './raise';
import MenuSttack from './menu';
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
      case 'raise':
        return (
          <RaiseScreen
            toggleModal={this.toggleModal}
            isModalVisible={this.state.isModalVisible}
          />
        );
      case 'allIssues':
        return <AllIssuesStack />;
      case 'more':
        return <MenuSttack />;
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
              item !== 'raise'
                ? this.toggleModal(true)
                : this.toggleModal(true);
              this.setState({screen: item});
            }}
            selectedItem={this.state.screen}
          />
        )}
      </View>
    );
  }
}
