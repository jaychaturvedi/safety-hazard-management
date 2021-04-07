import React from 'react';
import {StyleSheet, View, Image, Text, RefreshControl} from 'react-native';
import Header from '../../components/header';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {HomeStackParamList} from '../../navigation/home';
import {Container, Content, List, ListItem, Icon} from 'native-base';

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
        <Header
          title={'More'}
          backgroundColor={'blue'}
          hasTabs
          hasSettings
          hideFilter
        />
        <ScrollView
          style={styles.scrollView}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              title="Loading..."
            />
          }>
          {/* <View style={{height: 500, backgroundColor: 'red'}}> */}
          <List
            style={{
              backgroundColor: 'white',
            }}>
            {/* <ListItem itemDivider>
                <Text>A</Text>
              </ListItem> */}
            <ListItem
              style={{
                display: 'flex',
              }}>
              <Icon style={styles.listIcon} type="EvilIcons" name="user" />
              <Text style={styles.listText}>Profile</Text>
            </ListItem>
            <ListItem>
              <Icon style={styles.listIcon} type="AntDesign" name="contacts" />
              <Text style={styles.listText}>Contacts</Text>
            </ListItem>
            <ListItem>
              <Icon style={styles.listIcon} type="EvilIcons" name="Profile" />
              <Text style={styles.listText}>Tutorials</Text>
            </ListItem>
            <ListItem>
              <Icon
                style={styles.listIcon}
                type="MaterialIcons"
                name="logout"
              />
              <Text style={styles.listText}>EHS Training</Text>
            </ListItem>
            <ListItem>
              <Icon
                style={styles.listIcon}
                type="MaterialIcons"
                name="logout"
              />
              <Text style={styles.listText}>Logout</Text>
            </ListItem>
          </List>
          {/* </View> */}
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
  listText: {
    fontSize: 16,
    flex: 7,
  },
  listItem: {
    fontSize: 16,
  },
  listIcon: {
    fontSize: 28,
    marginRight: 24,
    flex: 1,
  },
  scrollView: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#F5F6F7',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
});
