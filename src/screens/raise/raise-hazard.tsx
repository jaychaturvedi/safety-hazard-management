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
import * as ImagePicker from 'react-native-image-picker';
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
  AttachedPhotoList: Array<any>;
};

export default class RaiseHazard extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      refreshing: false,
    };
  }
  handleChoosePhoto = () => {
    ImagePicker.launchImageLibrary({
      mediaType: "photo",
      maxHeight: 300,
      maxWidth: 300,
    }, (response) => {
      if (response.uri && response.fileSize! < 41052) {
        this.setState({ photo: [...this.state.photo, response] });
        AttachedPhotoList.push(response)
      }
    });
  };
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
          <Text style={styles.title}>Hazard Details</Text>
          <View style={styles.fields}>
            <Text style={styles.label}>Hazard name</Text>
            <InputBox
              height={40}
              marginHorizontal={20}
              placeHolder="enter hazard name"
            />
          </View>
          <View style={styles.fields}>
            <Text style={styles.label}>Primary hazard type</Text>
            <InputBox
              height={40}
              marginHorizontal={20}
              placeHolder="enter hazard name"
            />
          </View>
          <View style={styles.fields}>
            <Text style={styles.label}>Nature of hazard</Text>
            <View
              style={{
                borderColor: '#D0D0DA',
                borderWidth: 1,
                borderRadius: 8,
              }}>
              <DropDownPicker items={['op']} />
            </View>
          </View>
          <View style={styles.fields}>
            <Text style={styles.label}>Hazard description</Text>
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

            <Text style={styles.label}>Photo/Video</Text>
            <Text>Upload a photo or video or record from your device</Text>
            <Button
          title="Select image"
          onPress={() =>
            ImagePicker.launchImageLibrary(
              {
                mediaType: 'photo',
                includeBase64: false,
                maxHeight: 200,
                maxWidth: 200,
              },
              (response) => {
                setResponse(response);
              },
            )
          }
        />

          </View>
          
          <Text style={styles.title}>
            Facility Details
          </Text>
          <View style={styles.fields}>
            <Text style={styles.label}>Facility</Text>
            <DropDownPicker items={['North London']} />
          </View>
          <View style={styles.fields}>
            <Text style={styles.label}>Department</Text>
            <DropDownPicker items={['Department B']}></DropDownPicker>
          </View>
          <View style={styles.fields}>
            <Text style={styles.label}>Location</Text>
            <DropDownPicker items={['Area II']}></DropDownPicker>
          </View>
          <View style={styles.fields}>
            <Text style={styles.label}>Sub-Area (optional)</Text>
            <InputBox height={40} marginHorizontal={20} placeHolder="N/A" />
          </View>
          <View style={styles.fields}>
            <Text style={styles.label}>Machine ID (optional)</Text>
            <InputBox height={40} marginHorizontal={20} placeHolder="N/A" />
          </View>
          <Text style={styles.title}>
            Additional Details
            </Text>
          <View style={styles.fields}>
            <Text style={styles.label}>Risk Probability</Text>
            <InputBox height={40} marginHorizontal={20} placeHolder="N/A" />
          </View>
          <View style={styles.fields}>
            <Text style={styles.label}>Risk Severity</Text>
            <InputBox height={40} marginHorizontal={20} placeHolder="N/A" />
          </View>
          <View style={styles.fields}>
            <Text style={styles.label}>Risk Level</Text>
            <InputBox
              disabled={true}
              height={40}
              marginHorizontal={20}
              placeHolder="N/A"
            />
            <DropDownPicker items={['View Risk Level Map']}></DropDownPicker>
          </View>
          <View style={styles.fields}>
            <Text style={styles.label}>Owner</Text>
            <DropDownPicker items={['Department Manager']}></DropDownPicker>
          </View>
          <TouchableOpacity>
            <View
              style={{
                marginBottom: 40,
                backgroundColor: 'blue',
                width: '100%',
                marginLeft: 'auto',
                marginRight: 'auto',
                height: 40,
                borderRadius: 5,
                marginTop: 10,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'white',
                  fontSize: 20,
                  marginTop: 6,
                }}>
                Raise hazard
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  fields: {
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginVertical: 20
  },
});
