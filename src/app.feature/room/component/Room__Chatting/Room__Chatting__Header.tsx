import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useRoomContext } from 'app.feature/room/screen/ScreenRoomProvider';
import { useGetRoomUsingInfo } from 'app.store/roomUsingInfo/store.roomUsingInfo';

export default function RoomChattingHeader() {
  const roomUsingInfo = useGetRoomUsingInfo();
  const { setChattingOpen } = useRoomContext();
  return (
    <Container>
      {`${roomUsingInfo?.roomName} 채팅방`}
      <CloseIcon
        onClick={() => {
          setChattingOpen(false);
        }}
      >
        <FontAwesomeIcon icon={faTimes} />
      </CloseIcon>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  color: ${(props) => props.theme.mainBlue};
  font-size: 24px;
  font-family: ${(props) => props.theme.plainBoldTextFont};
  padding: 0px 20px;
`;

const CloseIcon = styled.div`
  position: absolute;
  top: 6px;
  right: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: fit-content;
  font-size: 24px;
  :hover {
    cursor: pointer;
  }
`;
