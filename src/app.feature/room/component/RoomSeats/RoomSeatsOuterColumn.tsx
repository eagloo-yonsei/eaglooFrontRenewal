import React from 'react';
import styled from 'styled-components';
import RoomSeat from 'app.feature/room/component/RoomSeat';
import RoomControlButtons from 'app.feature/room/component/RoomControlButtons';

interface RoomSeatsOuterColumnProp {
  seatNums: number[];
  roomUsingInfo: object | any;
}

export default function RoomSeatsOuterColumn({
  seatNums,
  roomUsingInfo,
}: RoomSeatsOuterColumnProp) {
  return (
    <Container>
      {seatNums.map((seatNo) => {
        return (
          <ColumnSeat key={`seat${seatNo}`}>
            <RoomSeat seatNo={seatNo} roomUsingInfo={roomUsingInfo} />
          </ColumnSeat>
        );
      })}
      {seatNums.length != 4 && (
        <ColumnSeat>
          <RoomControlButtons />
        </ColumnSeat>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 14%;
  height: 100%;
`;

const ColumnSeat = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 25%;
  border-radius: 10px;
`;
