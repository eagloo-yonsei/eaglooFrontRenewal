import React from 'react';
import styled from 'styled-components';
import EntrySeat from 'app.feature/entry/component/EntrySeats/EntrySeat';

type TProps = {
  seatNums: number[];
};

const EntrySeatsOuterRow: React.FC<TProps> = ({ seatNums }) => {
  return (
    <StyledWrapper>
      {seatNums.map((seatNo) => (
        <div className="row-seat" key={`seat-${seatNo}`}>
          <EntrySeat seatNo={seatNo} />
        </div>
      ))}
    </StyledWrapper>
  );
};

export default EntrySeatsOuterRow;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 20%;

  .row-seat {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 14%;
    height: 100%;
    border-radius: 10px;
  }
`;
