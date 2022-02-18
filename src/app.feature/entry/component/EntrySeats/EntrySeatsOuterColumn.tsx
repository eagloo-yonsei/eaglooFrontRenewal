import React from 'react';
import styled from 'styled-components';
import EntrySeat from 'app.feature/entry/component/EntrySeats/EntrySeat';

type TProps = {
  seatNums: number[];
};

const EntrySeatsOuterColumn: React.FC<TProps> = ({ seatNums }) => {
  return (
    <StyledWrapper>
      {seatNums.map((seatNo) => (
        <div key={`seat-${seatNo}`} className="column-seat">
          <EntrySeat seatNo={seatNo} />
        </div>
      ))}
    </StyledWrapper>
  );
};

export default EntrySeatsOuterColumn;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 14%;
  height: 100%;

  .column-seat {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 25%;
    border-radius: 10px;
  }
`;
