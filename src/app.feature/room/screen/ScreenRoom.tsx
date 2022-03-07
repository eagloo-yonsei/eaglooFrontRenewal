import React from 'react';
import styled from 'styled-components';
import RoomHeader from 'app.feature/room/component/Room__Header';
import Room14Seats from 'app.feature/room/component/Room__14Seats';
import RoomChatting from 'app.feature/room/component/Room__Chatting';

const ScreenRoom = ({ roomUsingInfo, userInfo, socketRef }) => {
  return (
    <StyledWrapper>
      <RoomHeader />
      <Room14Seats />
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
