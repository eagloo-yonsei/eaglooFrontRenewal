import React from 'react';
import styled from 'styled-components';
import RoomHeader from 'app.feature/room/component/RoomHeader';
import RoomSeats from 'app.feature/room/component/RoomSeats/RoomSeats';
import RoomChatting from 'app.feature/room/component/RoomChatting/Room__Chatting';
import RoomChattingOpenButton from 'app.feature/room/component/RoomChatting/Room__Chatting__OpenButton';

const ScreenRoom = ({ roomUsingInfo, userInfo, socketRef }) => {
  return (
    <StyledWrapper>
      <RoomHeader roomUsingInfo={roomUsingInfo} />
      <RoomSeats roomUsingInfo={roomUsingInfo} userInfo={userInfo} />
      <RoomChatting
        roomUsingInfo={roomUsingInfo}
        userInfo={userInfo}
        socketRef={socketRef}
      />
      <RoomChattingOpenButton />
    </StyledWrapper>
  );
};

export default ScreenRoom;

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  font-family: NexonGothicLv1;
  padding: 30px 30px 10px 30px;
`;
