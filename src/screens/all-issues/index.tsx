import React from 'react';
import {StyleSheet, View, Image, Text, RefreshControl} from 'react-native';
import Header from '../../components/header';
import RadiusCard from '../../components/radius-card';
import SegmentBar from './components/segment-bar/segment';
import SearchBar from './components/search-bar';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {HomeStackParamList} from '../../navigation/home';
import Metrics from '../home/components/metrics';
import {Icon} from 'native-base';

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
        <Header title={'Manage'} backgroundColor={'blue'} hasTabs />
        <ScrollView
          style={styles.scrollView}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              title="Loading..."
            />
          }>
          <SegmentBar tabs={['All', 'Hazard', 'Incident']} />
          <View
            style={{
              marginVertical: 20,
            }}>
            <SearchBar />
          </View>
          <View>
            <RadiusCard
              title="Machine guard missing on the...."
              dueDate="6th March 2021"
              status="Resolved"
              assignedTo="Assigned to you"
              severity="Low"
              incidentType="Safety Hazard"
            />
            <RadiusCard
              title="Lethe guard missing on the...."
              dueDate="6th March 2021"
              status="Resolved"
              assignedTo="Assigned to DM"
              severity="Low"
              incidentType="Environment Hazard"
            />
            <RadiusCard
              title="Trash need to be empty...."
              dueDate="6th March 2021"
              status="Resolved"
              assignedTo="Assigned to you"
              severity="Low"
              incidentType="Safety Hazard"
              radiusColor="#175BA4"
            />
            <RadiusCard
              title="Machine guard missing on the...."
              dueDate="6th March 2021"
              status="Resolved"
              assignedTo="Assigned to you"
              severity="Low"
              incidentType="Safety Hazard"
              radiusColor="#175BA4"
            />
            <RadiusCard
              title="Machine guard missing on the...."
              dueDate="6th March 2021"
              status="Resolved"
              assignedTo="Assigned to DM"
              severity="Low"
              incidentType="Environment Hazard"
            />
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
  scrollView: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#F5F6F7',
    padding: 20,
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
