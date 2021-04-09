import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Header, Left, Right, Button, Subtitle, Title, Icon} from 'native-base';
interface Props {
  hasNotification?: boolean;
  hasSettings?: boolean;
  title: string;
  subtitle?: string;
  backgroundColor: string;
  hasSubtitle?: boolean;
  hasTabs?: boolean;
  hideFilter?: boolean;
  hasBackButton?: boolean;
  hideNotification?: boolean;
  onBackClick?: () => void;
  onNotificationClick?: () => void;
}

class CHeader extends React.PureComponent<Props, {}> {
  render() {
    let Theme = this.context.theme; //load theme context
    return (
      <Header
        style={{
          backgroundColor: this.props.backgroundColor,
        }}
        noShadow
        hasSubtitle
        hasTabs={this.props.hasTabs}
        androidStatusBarColor={this.props.backgroundColor}>
        <View style={styles.container}>
          <View style={styles.left}>
            {this.props.hasBackButton && (
              <TouchableOpacity onPress={this.props.onBackClick}>
                <Image
                  source={require('../../assets/icons/back.png')}
                  style={styles.icon}
                />
              </TouchableOpacity>
            )}
            <View style={{alignItems: 'flex-start'}}>
              <Title
                style={{
                  ...styles.title,
                  color: 'white', //change theme
                }}>
                {this.props.title}
              </Title>
              {this.props.hasSubtitle && (
                <Subtitle
                  style={{
                    ...styles.subtitle,
                    color: 'white', //change theme
                  }}>
                  {this.props.subtitle}
                </Subtitle>
              )}
            </View>
          </View>
          <View
            style={{
              width: '30%',
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}>
            {!this.props.hideNotification && (
              <>
                <Button
                  transparent
                  onPress={() => console.log('show notification')}>
                  <Icon name="notifications-outline" />
                  {/* <Notification style={styles.rightIcon} /> */}
                </Button>
              </>
            )}
            {this.props.hasSettings && (
              <Button
                transparent
                onPress={() => console.log('show notification')}>
                <Icon name="settings" />
                {/* <Notification style={styles.rightIcon} /> */}
              </Button>
            )}
            {!this.props.hideFilter && (
              <Button
                transparent
                onPress={() => console.log('show notification')}>
                <Icon type="AntDesign" name="filter" />
                {/* <Notification style={styles.rightIcon} /> */}
              </Button>
            )}
          </View>
        </View>
      </Header>
    );
  }
}

export default CHeader;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  left: {
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  icon: {
    width: 18,
    height: 18,
    marginRight: 18,
  },
  title: {fontSize: 24, fontWeight: 'bold', color: 'black'},
  subtitle: {fontSize: 12, fontWeight: 'normal', color: 'black'},
  rightIcon: {width: 26, height: 26, position: 'relative'},
});
