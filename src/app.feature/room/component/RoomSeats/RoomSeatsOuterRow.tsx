import React from 'react';
import styled from 'styled-components';
import RoomSeat from 'app.feature/room/component/RoomSeat';

const RoomSeatsOuterRow = ({ seatNums, roomUsingInfo }) => {
  return (
    <Container>
      {seatNums.map((seatNo) => {
        return (
          <RowSeat key={`seat${seatNo}`}>
            <RoomSeat seatNo={seatNo} roomUsingInfo={roomUsingInfo} />
          </RowSeat>
        );
      })}
    </Container>
  );
};

export default RoomSeatsOuterRow;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 20%;
`;

const RowSeat = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 14%;
  height: 100%;
  border-radius: 10px;
`;
