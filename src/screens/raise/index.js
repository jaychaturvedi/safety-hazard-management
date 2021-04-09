import React, { useState } from 'react';
import { Button, Text, View, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import RaiseHazardStack from '../../navigation/raise-hazard';

export default function Raise({
  isModalVisible,
  toggleModal,
  onItemSelect
}) {
  return (
    <Modal
      hasBackdrop={true}
      onBackdropPress={() => toggleModal(false)}
      backdropOpacity={0.5}
      isVisible={isModalVisible}>
      <View style={{ flex: 1, justifyContent: "flex-end", marginBottom: 80 }}>
        <View style={{ alignSelf: "center", justifyContent: "space-between", height: 150 }}>
          <TouchableOpacity
            onPress={() => {
              toggleModal(false)
              onItemSelect("raiseHazard")
            }}
            style={{
              marginBottom: 10,
              width: 200,
              height: 54,
              borderRadius: 4,
              backgroundColor: "#175BA4",
              justifyContent: "center"
            }} >
            <Text style={{ color: "white", textAlign: "center", justifyContent: "center" }}>
              Raise Hazard
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              toggleModal(false)
              onItemSelect("raiseIncident")
            }}
            style={{
              marginBottom: 10,
              width: 200,
              height: 54,
              borderRadius: 4,
              backgroundColor: "#175BA4",
              justifyContent: "center"
            }} >
            <Text style={{ color: "white", textAlign: "center", justifyContent: "center" }}>
              Raise Incident
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

