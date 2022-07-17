import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {OverlayProvider} from 'stream-chat-react-native';

const App = () => {
  return (
    <GestureHandlerRootView>
      <OverlayProvider>
        <SafeAreaView>
          <View style={{alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold'}}>CHAT APP </Text>
          </View>
        </SafeAreaView>
      </OverlayProvider>
    </GestureHandlerRootView>
  );
};

export default App;
