/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import MyButton from '../components/MyButton';

const Home = ({navigation: {navigate}}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{alignItems: 'center', marginTop: 5}}>
        <Text style={{fontWeight: 'bold', marginBottom: 10}}>Home Screen</Text>
        <MyButton
          Colour="rgba(120, 50,150, 0.75)"
          Text="Go to chat"
          onPress={() => navigate('Chat')}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
