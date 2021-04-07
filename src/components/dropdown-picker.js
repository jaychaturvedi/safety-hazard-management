import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Dimensions, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function DropdownPicker(props) {
  const [ selectedLanguage, setSelectedLanguage ]=useState();
  return (
    <View style={{
      backgroundColor:"white",
      height: 40,
      justifyContent: "center",
      borderRadius: 4
    }}>
      <Picker
        mode="dropdown"
        dropdownIconColor="grey"
        style={{ color: "black" }}
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedLanguage(itemValue)
        }>
        <Picker.Item label="Plant A" value="Plant A" />
        <Picker.Item label="Plant B" value="Olant B" />
      </Picker>
    </View>
  );
}

const styles=StyleSheet.create({});
