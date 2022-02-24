import React from 'react';
import styled from 'styled-components';
import { useGetUser } from 'app.store/intoAPP/store.intoAPP';
import Loading from 'app.components/Loading/Loading';
import { useGetRoomUsingInfo } from 'app.store/roomUsingInfo/store.roomUsingInfo';
import ScreenRoomProvider from 'app.feature/room/screen/ScreenRoomProvider';
import ScreenRoom from 'app.feature/room/screen/ScreenRoom';

const Page_Room = () => {
  const getUser = useGetUser();
  const roomUsingInfo = useGetRoomUsingInfo();

  if (getUser?.isLoading || roomUsingInfo?.isLoading) return <Loading />;
  return (
    <StyledWrapper>
      <ScreenRoomProvider
        roomUsingInfo={roomUsingInfo}
        userInfo={getUser?.info}
        socketRef={getUser?.socket}
      >
        <ScreenRoom roomUsingInfo={roomUsingInfo} userInfo={getUser?.info} />
      </ScreenRoomProvider>
    </StyledWrapper>
  );
};

export default Page_Room;

const StyledWrapper = styled.div``;
