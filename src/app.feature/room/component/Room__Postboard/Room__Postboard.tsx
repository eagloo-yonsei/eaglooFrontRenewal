import React from 'react';
import RoomPostboardProvider from './Room__PostboardProvider';
import RoomPostBoardContainer from './Room__PostboardContainer';
import { useGetRoomUsingInfo } from 'app.store/roomUsingInfo/store.roomUsingInfo';
import { useGetUser } from 'app.store/intoAPP/store.intoAPP';

export default function RoomPostBoard() {
  const roomUsingInfo = useGetRoomUsingInfo();
  const getUser = useGetUser();

  if (getUser?.isLoading || roomUsingInfo?.isLoading) return null;
  return (
    <RoomPostboardProvider
      userInfo={getUser?.info}
      roomUsingInfo={roomUsingInfo}
    >
      <RoomPostBoardContainer />
    </RoomPostboardProvider>
  );
}
