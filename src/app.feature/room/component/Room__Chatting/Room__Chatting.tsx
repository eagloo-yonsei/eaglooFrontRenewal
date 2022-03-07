import React from 'react';
import RoomChattingProvider from './Room__ChattingProvider';
import RoomChattingContainer from './Room__ChattingContainer';
import { useGetUser } from 'app.store/intoAPP/store.intoAPP';
import { useGetRoomUsingInfo } from 'app.store/roomUsingInfo/store.roomUsingInfo';
import Loading from 'app.components/Loading/Loading';

export default function RoomChatting() {
  const getUser = useGetUser();
  const roomUsingInfo = useGetRoomUsingInfo();

  if (getUser?.isLoading || roomUsingInfo?.isLoading) return <Loading />;
  return (
    <RoomChattingProvider
      socketRef={getUser?.socket}
      roomUsingInfo={roomUsingInfo}
      userInfo={getUser?.info}
    >
      <RoomChattingContainer />
    </RoomChattingProvider>
  );
}
