import React from 'react';
import styled from 'styled-components';
import RoomPostBoard from '../Room__Postboard';
import { useRoomContext } from 'app.feature/room/screen/ScreenRoomProvider';
import RoomScreenShare from 'app.feature/room/component/Room__ScreenShare';
import RoomWhiteBoard from 'app.feature/room/component/Room__WhiteBoard';
import { useGetUser } from 'app.store/intoAPP/store.intoAPP';
import Loading from 'app.components/Loading/Loading';

export default function Room14SeatsPostBoard() {
  const { boardState, handleBoardState } = useRoomContext();
  const getUser = useGetUser();

  if (getUser?.isLoading) return <Loading />;
  return (
    <Container>
      {boardState === 'postBoard' && <RoomPostBoard />}
      {boardState === 'whiteBoard' && (
        <RoomWhiteBoard socketRef={getUser?.socket} />
      )}
      {boardState === 'screenShare' && <RoomScreenShare />}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 100%;
  font-size: 30px;
  font-family: ${(props) => props.theme.plainTextFont};
  padding: 12px 2px 0px 2px;
`;
