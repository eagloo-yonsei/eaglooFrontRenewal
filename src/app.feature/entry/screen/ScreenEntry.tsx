import React from 'react';
import styled from 'styled-components';
import EntryHeader from 'app.feature/entry/component/EntryHeader';
import EntrySeats from 'app.feature/entry/component/EntrySeats/EntrySeats';
import EntryClose from 'app.feature/entry/component/EntryClose';

const ScreenEntry = () => {
  return (
    <StyledWrapper>
      <EntryHeader />
      <EntrySeats />
      <EntryClose />
    </StyledWrapper>
  );
};

export default ScreenEntry;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  font-family: NexonGothicLv1Bold;
  padding: 60px 80px 30px;
  height: 100%;
`;
