import React from 'react';
import styled from 'styled-components';
import RoomSeatsOuterRow from 'app.feature/room/component/RoomSeats/RoomSeatsOuterRow';
import RoomSeatsOuterColumn from 'app.feature/room/component/RoomSeats/RoomSeatsOuterColumn';
import RoomPostBoard from 'app.feature/room/component/RoomPostboard/Room__Postboard';

const RoomSeats = ({ roomUsingInfo, userInfo }) => {
  return (
    <>
      <RoomSeatsOuterRow
        seatNums={[5, 6, 7, 8, 9, 10, 11]}
        roomUsingInfo={roomUsingInfo}
      />
      <StyledWrapper>
        <RoomSeatsOuterColumn
          seatNums={[4, 3, 2, 1]}
          roomUsingInfo={roomUsingInfo}
        />
        <RoomPostBoard roomUsingInfo={roomUsingInfo} userInfo={userInfo} />
        <RoomSeatsOuterColumn
          seatNums={[12, 13, 14]}
          roomUsingInfo={roomUsingInfo}
        />
      </StyledWrapper>
    </>
  );
};

export default RoomSeats;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 80%;
`;
