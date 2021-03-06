import React, {Component, useState} from 'react';
import {
  Container,
  Segment,
} from 'native-base';
import {StyleSheet, View, Image, Text, RefreshControl, Dimensions} from 'react-native';
import TabButton from './tab-button';

export default function SegmentBar(props: {
  tabs : string[]
}) {
  const [selectedTab, setSelectedTab] = useState(1);
  // const tabs = ['All', 'Hazard', 'Incident'];

  return (
    <Container style={styles.container}>
      <Segment style={styles.tabsWrapper}>
        {props.tabs.map((tab, index) => {
          return (
            <TabButton
              key={index}
              first={index == 0}
              last={index == props.tabs.length - 1}
              number={index + 1}
              setSelectedTabSetter={setSelectedTab}
              width={"30%"}
              selectedTab={selectedTab}>
              {tab}
            </TabButton>
          );
        })}
      </Segment>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  tabsWrapper: {
    backgroundColor: '#F5F6F7',
    width: '100%',
    // paddingTop: 20
  },
});
