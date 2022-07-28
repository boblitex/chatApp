/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {OverlayProvider, Chat} from 'stream-chat-react-native';
import {NavigationContainer} from '@react-navigation/native';
import {StreamChat} from 'stream-chat';
import Navigation from './navigation/Navigation';

const App = () => {
  const client = StreamChat.getInstance(process.env.STREAM_CHAT_API_KEY);
  useEffect(() => {
    (async () => {
      if (!client.userID) {
        try {
          await client.connectUser(
            {
              id: 'boblitex',
              name: 'Jude Bobinihi',
            },
            client.devToken('boblitex'),
          );
        } catch (error) {
          console.log(error);
        }
      }
    })();
  }, [client]);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <OverlayProvider>
        <Chat client={client}>
          <NavigationContainer>
            <Navigation />
          </NavigationContainer>
        </Chat>
      </OverlayProvider>
    </GestureHandlerRootView>
  );
};

export default App;
