import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Icon} from 'native-base';
import FooterText from "./footer-text";
interface Props {
  title: string;
  dueDate: string;
  status: string;
  severity: string;
  assignedTo: string;
  incidentType: string;
  radiusColor?: string;
}

type State = {
  refreshing: boolean;
};

class RadiusCard extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      refreshing: false,
    };
  }

  render() {
    return (
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            flex: 1,
            height: 120,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginVertical: 10,
            elevation: 3,
          }}>
          <View
            style={{
              width: 4,
              borderTopRightRadius: 8,
              borderBottomRightRadius: 8,
              height: '50%',
              backgroundColor: this.props.radiusColor || 'red',
            }}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: 12,
              height: '100%',
              width: '92%',
            }}>
            <Text style={{fontSize: 18, color: 'black'}}>
              {this.props.title}{' '}
              <Icon name="information-circle" style={{fontSize: 18}} />
            </Text>
            <Text style={{fontSize: 12, color: 'red'}}>
              {this.props.status}
            </Text>
            <Text style={{fontSize: 12, color: 'black'}}>
              Due: {this.props.dueDate}
            </Text>
            <View
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}>
              <FooterText
                backgroundColor="#FF2E2E0D"
                textColor="#FF2E2E"
                text={this.props.severity}
              />
              <FooterText textColor="#676767" text={this.props.incidentType} />
              <FooterText textColor="#676767" text={this.props.assignedTo} />
              {/* <Text
                style={{
                  fontSize: 12,
                  color: 'red',
                  backgroundColor: '#FF2E2E0D',
                }}>
                {this.props.severity}
              </Text>
              <Text style={{fontSize: 12}}>{this.props.incidentType}</Text>
              <Text style={{fontSize: 12}}>{this.props.assignedTo}</Text> */}
            </View>
          </View>
          <Icon
            type="FontAwesome"
            name="chevron-right"
            style={{
              fontSize: 18,
              color: this.props.radiusColor || 'red',
              paddingRight: 20,
            }}></Icon>
        </TouchableOpacity>
      </View>
    );
  }
}

export default RadiusCard;

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
