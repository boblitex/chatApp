/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Button, View} from 'react-native';
const MyButton = ({onPress, Text, Colour}) => {
  return (
    <View
      style={{
        backgroundColor: Colour,
        height: 40,
        width: '80%',
        borderRadius: 10,
      }}>
      <Button onPress={onPress} title={Text} color="#fff" />
    </View>
  );
};

export default MyButton;
