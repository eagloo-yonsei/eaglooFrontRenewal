import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUnlock, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { useRoomContext } from 'app.feature/room/screen/ScreenRoomProvider';
import TimerPerSecond from 'app.components/Timer/TimerPerSecond';

export default function RoomHeader({ roomUsingInfo }) {
  const { roomInfo, peersState } = useRoomContext();

  return (
    <Container>
      <RoomInfo>
        <RoomName>
          <FontAwesomeIcon
            icon={
              'usePassword' in roomInfo && roomInfo.usePassword
                ? faLock
                : faUnlock
            }
          />
          {`  ${roomUsingInfo?.roomName}`}
        </RoomName>
        <RoomPeople>
          <FontAwesomeIcon icon={faUserAlt} />
          {`  ${peersState.length + 1}/14`}
        </RoomPeople>
      </RoomInfo>
      <TimerContainer>
        <TimerPerSecond endTime={roomUsingInfo!.endTime} showSecond={true} />
      </TimerContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  padding-left: 25px;
  padding-right: 50px;
  margin-bottom: 20px;
`;

const RoomInfo = styled.div`
  display: flex;
  gap: 24px;
  @media (max-width: 1300px) {
    gap: 14px;
  }
  justify-content: space-between;
  align-items: center;
  width: fit-content;
  height: 100%;
  font-family: NexonGothicLv1Bold;
`;

const RoomName = styled.div`
  font-size: 30px;
  @media (max-width: 1300px) {
    font-size: 24px;
  }
  color: white;
`;

const RoomPeople = styled.div`
  font-size: 20px;
  @media (max-width: 1300px) {
    font-size: 16px;
  }
  color: #c4c4c4;
`;

const TimerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
  height: 100%;
  color: #c4c4c4;
  font-size: 32px;
  font-family: SamlipHopang;
`;
