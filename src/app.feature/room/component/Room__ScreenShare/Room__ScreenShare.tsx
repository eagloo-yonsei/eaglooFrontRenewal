import React from 'react';
import { useGetRoomUsingInfo } from 'app.store/roomUsingInfo/store.roomUsingInfo';
import { useGetUser } from 'app.store/intoAPP/store.intoAPP';
import RoomScreenShareProvider from 'app.feature/room/component/Room__ScreenShare/Room__ScreenShareProvider';
import RoomScreenShareContainer from 'app.feature/room/component/Room__ScreenShare/Room__ScreenShareContainer';

export default function RoomPostBoard() {
  const roomUsingInfo = useGetRoomUsingInfo();
  const getUser = useGetUser();

  if (getUser?.isLoading || roomUsingInfo?.isLoading) return null;
  return (
    <RoomScreenShareProvider
      userInfo={getUser?.info}
      roomUsingInfo={roomUsingInfo}
    >
      <RoomScreenShareContainer />
    </RoomScreenShareProvider>
  );
}
