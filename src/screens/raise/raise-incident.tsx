import React from 'react';
import {StyleSheet, View, Image, Text, RefreshControl} from 'react-native';
import Header from '../../components/header';
import {InputGroup, Input} from 'native-base';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {RaiseIncidentStackParamList} from '../../navigation/raise-incident';
import Metrics from '../home/components/metrics';

type RaiseNavigationProp = StackNavigationProp<
  RaiseIncidentStackParamList,
  'RaiseIncident'
>;

interface Props {
  navigation: RaiseNavigationProp;
  route: RouteProp<RaiseIncidentStackParamList, 'RaiseIncident'>;
}

type State = {
  refreshing: boolean;
};

export default class RaiseIncident extends React.PureComponent<Props, State> {
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
        <Header title={'Raise an Incident'} backgroundColor={'blue'} hasTabs />
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
        </View>
        <ScrollView
          style={styles.scrollView}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              title="Loading..."
            />
          }>
          <Text style={{fontSize: 24, color: '#FF2E2E'}}>Incident</Text>
          <View
            style={{
              backgroundColor: 'white',
              borderColor: '#D0D0DA',
              borderWidth: 1,
              borderRadius: 8,
              paddingHorizontal:8,
              height:40
            }}>
            <Input
              placeholder="search here"
              placeholderTextColor="#D0D0DA"
              style={{
                // opacity: 0.7,
                fontSize: 16,
              }}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

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
