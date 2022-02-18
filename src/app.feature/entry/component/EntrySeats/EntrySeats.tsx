import React from 'react';
import styled from 'styled-components';
import EntrySeatsOuterRow from 'app.feature/entry/component/EntrySeats/EntrySeatsOuterRow';
import EntrySeatsOuterColumn from 'app.feature/entry/component/EntrySeats/EntrySeatsOuterColumn';
import EntrySeatsControlPanel from 'app.feature/entry/component/EntrySeats/EntrySeatsControlPanel/EntrySeatsControlPanel';

const EntrySeats = () => {
  return (
    <StyledWrapper>
      <EntrySeatsOuterRow seatNums={[5, 6, 7, 8, 9, 10, 11]} />
      <div className="entry-inner-row">
        <EntrySeatsOuterColumn seatNums={[4, 3, 2, 1]} />
        <EntrySeatsControlPanel />
        <EntrySeatsOuterColumn seatNums={[12, 13, 14]} />
      </div>
    </StyledWrapper>
  );
};

export default EntrySeats;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 85%;

  .entry-inner-row {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 80%;
  }
`;
