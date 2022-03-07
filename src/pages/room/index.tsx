import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useGetUser } from 'app.store/intoAPP/store.intoAPP';
import Loading from 'app.components/Loading/Loading';
import { useGetRoomUsingInfo } from 'app.store/roomUsingInfo/store.roomUsingInfo';
import ScreenRoomProvider from 'app.feature/room/screen/ScreenRoomProvider';
import ScreenRoom from 'app.feature/room/screen/ScreenRoom';
import { useRouter } from 'next/router';

const Page_Room = () => {
  const router = useRouter();
  const getUser = useGetUser();
  const roomUsingInfo = useGetRoomUsingInfo();

  useEffect(() => {
    if (!getUser?.login) router.push('/login');
  }, [getUser?.isLoading, getUser?.login]);

  if (
    getUser?.isLoading ||
    roomUsingInfo?.isLoading ||
    !roomUsingInfo?.roomId ||
    !getUser?.login
  )
    return <Loading />;
  return <Room getUser={getUser} roomUsingInfo={roomUsingInfo} />;
};

const Room = ({ getUser, roomUsingInfo }) => {
  return (
    <StyledWrapper>
      <ScreenRoomProvider
        roomUsingInfo={roomUsingInfo}
        userInfo={getUser?.info}
        socketRef={getUser?.socket}
      >
        <ScreenRoom
          roomUsingInfo={roomUsingInfo}
          userInfo={getUser?.info}
          socketRef={getUser?.socket}
        />
      </ScreenRoomProvider>
    </StyledWrapper>
  );
};
export default Page_Room;

const StyledWrapper = styled.div`
  height: 100%;
`;
