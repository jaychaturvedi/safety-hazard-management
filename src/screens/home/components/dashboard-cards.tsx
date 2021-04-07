import React from 'react';
import {StyleSheet, View, Image, Text, RefreshControl} from 'react-native';
import Card from './card';

interface Props {
  primaryLabel: string;
  primaryColor: string;
  secondaryLabel: string;
  secondaryColor: string;
}

type State = {
  refreshing: boolean;
};

export default function DashboardCards(props: Props) {
  return (
    <View>
      <View style={{marginVertical: 10}}>
        <Card
          title={props.primaryLabel}
          color={props.primaryColor}
          image={
            <Image
              source={{
                uri:
                  'https://homepages.cae.wisc.edu/~ece533/images/serrano.png',
              }}
              style={{
                width: 80,
                height: 80,
              }}
              resizeMethod={'resize'}
              resizeMode={'stretch'}
            />
          }
        />
      </View>
      <View style={{marginVertical: 10}}>
        <Card
          title={props.secondaryLabel}
          color={props.secondaryColor}
          image={
            <Image
              source={{
                uri:
                  'https://homepages.cae.wisc.edu/~ece533/images/serrano.png',
              }}
              style={{
                width: 80,
                height: 80,
              }}
              resizeMethod={'resize'}
              resizeMode={'stretch'}
            />
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  body: {flex: 1},
});
