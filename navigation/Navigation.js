import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Chat from '../screens/Chat';
import ChannelList from '../screens/ChannelList';
const Navigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="ChannelList" component={ChannelList} />
    </Stack.Navigator>
  );
};

export default Navigation;
