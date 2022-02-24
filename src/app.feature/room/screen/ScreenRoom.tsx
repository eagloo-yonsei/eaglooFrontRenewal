import React from 'react';
import styled from 'styled-components';
import RoomHeader from 'app.feature/room/component/RoomHeader';
import RoomSeats from 'app.feature/room/component/RoomSeats/RoomSeats';

const ScreenRoom = ({ roomUsingInfo, userInfo }) => {
  return (
    <StyledWrapper>
      <RoomHeader roomUsingInfo={roomUsingInfo} />
      <RoomSeats roomUsingInfo={roomUsingInfo} userInfo={userInfo} />
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
