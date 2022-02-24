import React from 'react';
import RoomChattingProvider from './Room__ChattingProvider';
import RoomChattingContainer from './Room__ChattingContainer';

export default function RoomChatting({ roomUsingInfo, userInfo, socketRef }) {
  return (
    <RoomChattingProvider
      roomUsingInfo={roomUsingInfo}
      userInfo={userInfo}
      socketRef={socketRef}
    >
      <RoomChattingContainer
        roomUsingInfo={roomUsingInfo}
        userInfo={userInfo}
      />
    </RoomChattingProvider>
  );
}
