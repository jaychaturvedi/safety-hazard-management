import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  RefreshControl,
  TextInput,
} from 'react-native';
import {InputGroup, Input, Button} from 'native-base';
import Header from '../../components/header';
import RadiusCard from '../../components/radius-card';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {RaiseHazardStackParamList} from '../../navigation/raise-hazard';
import InputBox from './components/input';
import DropDownPicker from '../../components/dropdown-picker';
import {Icon} from 'native-base';

type RaiseNavigationProp = StackNavigationProp<
  RaiseHazardStackParamList,
  'RaiseHazard'
>;

interface Props {
  navigation: RaiseNavigationProp;
  route: RouteProp<RaiseHazardStackParamList, 'RaiseHazard'>;
}

type State = {
  refreshing: boolean;
};

export default class RaiseHazard extends React.PureComponent<Props, State> {
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
        <Header title={'Raise a Hazard'} backgroundColor={'blue'} hasTabs />
        <ScrollView
          style={styles.scrollView}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              title="Loading..."
            />
          
          }>
          <Text style={{fontSize: 24, fontWeight: '700'}}>Hazard Details</Text>
          <Text style={{fontSize: 16}}>Hazard name</Text>
          <InputBox
            height={40}
            marginHorizontal={20}
            placeHolder="enter hazard name"
          />
          <Text style={{fontSize: 16}}>Primary hazard type</Text>
          <InputBox
            height={40}
            marginHorizontal={20}
            placeHolder="enter hazard name"
          />
          <Text style={{fontSize: 16}}>Nature of hazard</Text>
          <View
            style={{
              marginTop: 12,
              borderColor: '#D0D0DA',
              borderWidth: 1,
              borderRadius: 8,
            }}>
            <DropDownPicker items={['Lodu', 'lahsan']} />
          </View>

          <Text style={{fontSize: 16}}>Hazard description</Text>

          <TextInput
            style={{
              height: 150,
              textAlignVertical: 'top',
              fontSize: 18,
              backgroundColor: 'white',
            }}
            multiline
            // keyboardType="visible-password"
            maxLength={300}
            numberOfLines={5}
            // onChangeText={(text) => this.onChangeText(text)}
            // value={this.state.text}
            placeholder="Describe the issue here"
          />
          <View style={{marginVertical:20}}>
          <Text style={{fontSize:23,fontWeight:"400"}}>Facility Details</Text>
          </View>
          <View style={{marginBottom:10}}>
          <Text>Facility</Text>
          </View>
          <DropDownPicker items={['North London']} />
          <View style={{marginVertical:10}}>
          <Text>Department</Text>
          </View>
          <DropDownPicker items={['Department B']}></DropDownPicker>
          <View style={{marginVertical:10}}>
          <Text>Location</Text>
          </View>
          <DropDownPicker items={['Area II']}></DropDownPicker>
          <View style={{marginVertical:10}}>
          <Text>Sub-Area (optional)</Text>
          </View>
          <InputBox
            height={40}
            marginHorizontal={20}
            placeHolder="N/A"
            
          />
          <View style={{marginVertical:10}}>
          <Text>Machine ID (optional)</Text>
          </View>   
          <InputBox
            height={40}
            marginHorizontal={20}
            placeHolder="N/A"
          />
          <View style={{marginVertical:20}}>
          <Text style={{fontSize:23,fontWeight:"400"}}>Additional Details</Text>
          </View>
          <View  style={{marginVertical:10}}>
          <Text>Risk Probability</Text>
          </View>
          <InputBox
            height={40}
            marginHorizontal={20}
            placeHolder="N/A"
          />
          <View style={{marginVertical:10}}>
          <Text>Risk Severity</Text>
          </View>
          <InputBox
            height={40}
            marginHorizontal={20}
            placeHolder="N/A"
          />
          <View style={{marginVertical:10}}>
          <Text>Risk Level</Text>
          </View>
          <InputBox
            disabled={true}
            height={40}
            marginHorizontal={20}
            placeHolder="N/A"
          />
          <DropDownPicker items={['View Risk Level Map']}></DropDownPicker>
          <View style={{marginVertical:10}}>
          <Text>Owner</Text>
          </View>
          <DropDownPicker items={['Department Manager']}></DropDownPicker>
          <TouchableOpacity>
            <View style={{marginBottom:40,backgroundColor:'blue',width:'100%',marginLeft:'auto',marginRight:'auto',height:40,borderRadius:5,marginTop:10}}>
         <Text style={{textAlign:'center',color:'white',fontSize:20,marginTop:6}}>Hello</Text>
         </View>
         </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'blue',
    height: '100%',
  },
  scrollView: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#F5F6F7',
    padding: 20,
    paddingTop: 20,
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
