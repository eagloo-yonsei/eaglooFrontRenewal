import React from 'react';
import RoomPostBoardProvider from './Room__PostboardProvider';
import RoomPostBoardContainer from './Room__PostboardContainer';
import styled from 'styled-components';

export default function RoomPostBoard({ roomUsingInfo, userInfo }) {
  return (
    <StyledWrapper>
      <RoomPostBoardProvider roomUsingInfo={roomUsingInfo} userInfo={userInfo}>
        <RoomPostBoardContainer />
      </RoomPostBoardProvider>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 100%;
  font-size: 30px;
  font-family: NexonGothicLv1;
  padding: 12px 2px 0px 2px;
`;
