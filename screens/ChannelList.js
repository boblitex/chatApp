import React from 'react';
import {Channel, MessageInput, MessageList} from 'stream-chat-react-native';
const ChannelList = ({
  route: {
    params: {channel},
  },
}) => {
  return (
    <Channel channel={channel}>
      <MessageList />
      <MessageInput />
    </Channel>
  );
};

export default ChannelList;
