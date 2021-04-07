import React from 'react';
import {StyleSheet, View, Image, Text, RefreshControl} from 'react-native';
import Header from '../../components/header';
import DropDownPicker from '../../components/dropdown-picker';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Background from '../../components/background';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {HomeStackParamList} from '../../navigation/home';
import Metrics from './components/metrics';
import Card from './components/card';
import DashboardCards from './components/dashboard-cards';

type HomeNavigationProp = StackNavigationProp<HomeStackParamList, 'Home'>;

interface Props {
  navigation: HomeNavigationProp;
  route: RouteProp<HomeStackParamList, 'Home'>;
}

type State = {
  refreshing: boolean;
};

class Home extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      refreshing: false,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <Background /> */}
        <Header title={'Hii Mathew'} backgroundColor={'blue'} hasTabs />
        <ScrollView
          style={{
            flex: 1,
          }}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              title="Loading..."
            />
          }>
          <View
            style={{
              zIndex: 1,
              flexDirection: 'column',
              // alignItems: 'center',
              width: '100%',
              paddingHorizontal: 20,
              paddingVertical: 10,
              backgroundColor: 'blue',
            }}>
            <View style={{paddingBottom: 10}}>
              <Metrics dueToday={'05'} overDue={'10'} upcoming={'15'} />
            </View>
            <Text
              style={{
                color: 'white',
                fontSize: 20,
              }}>
              View Facility Details
            </Text>
            <View
              style={{
                marginTop: 12,
              }}>
              <DropDownPicker />
            </View>
          </View>
          <View style={styles.dashboardCards}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                flex: 2,
                margin: 20,
              }}>
              <View style={{flex: 1, marginRight: 10}}>
                <DashboardCards
                  primaryColor="yellow"
                  primaryLabel="Dashboards"
                  secondaryColor="lightblue"
                  secondaryLabel="Checklists"
                />
              </View>
              <View style={{flex: 1, marginLeft: 10, marginTop: 40}}>
                <DashboardCards
                  primaryColor="lightgreen"
                  primaryLabel="Leaderboard"
                  secondaryColor="lightpink"
                  secondaryLabel="Archives"
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    height: '100%',
  },
  dashboardCards: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#F5F6F7',
    padding: 10,
  },
  // container: {
  //   backgroundColor: '#F0F0F0',
  //   width: '100%',
  //   // paddingTop: 20
  // },
  verticalDivider: {
    width: 1,
    height: '85%',
    borderWidth: 1,
    borderColor: 'white',
    marginVertical: 5,
  },
});
