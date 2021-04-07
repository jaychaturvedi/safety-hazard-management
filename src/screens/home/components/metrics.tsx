import React from 'react';
import {StyleSheet, View, Image, Text, RefreshControl} from 'react-native';

interface Props {
  dueToday: string;
  upcoming: string;
  overDue: string;
}

function Metrics(props: Props) {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        // paddingVertical: 20,
        alignItems: "center",
      }}>
      <View>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 30,
            fontWeight: 'bold',
            color: 'yellow',
          }}>
          {props.dueToday}
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 16,
            color: 'white',
          }}>
          Due Today
        </Text>
      </View>

      <View style={styles.verticalDivider} />

      <View>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 30,
            fontWeight: 'bold',
            color: 'yellow',
          }}>
          {props.upcoming}
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 16,
            color: 'white',
          }}>
          Upcoming
        </Text>
      </View>

      <View style={styles.verticalDivider} />

      <View>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 30,
            fontWeight: 'bold',
            color: 'yellow',
          }}>
          {props.overDue}
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 16,
            color: 'white',
          }}>
          OverDue
        </Text>
      </View>
    </View>
  );
}

export default Metrics;

const styles = StyleSheet.create({
  verticalDivider: {
    width: 1,
    height: '60%',
    borderWidth: 1,
    borderColor: 'white',
    marginVertical: 5,
  },
});
