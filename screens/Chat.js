/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {ChannelList} from 'stream-chat-react-native';

const ChatList = ({navigation: {navigate}}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          height: 50,
          backgroundColor: 'white',
          borderRadius: 10,
          width: '80%',
          marginHorizontal: '10%',
          marginVertical: 10,
          padding: 2,
        }}>
        <View style={{width: '50%'}}>
          <Text style={{fontWeight: 'bold', textAlign: 'center'}}>
            Ambassadors
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#008ECF',
            borderRadius: 10,
            width: '50%',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              color: 'white',
              padding: 15,
              width: 150,
              textAlign: 'center',
            }}>
            Students
          </Text>
        </View>
      </View>
      <ChannelList onSelect={channel => navigate('ChannelList', {channel})} />
    </SafeAreaView>
  );
};

export default ChatList;
