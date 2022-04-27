import React from 'react';
import styled from 'styled-components';
import { useRoomContext } from 'app.feature/room/screen/ScreenRoomProvider';

export default function RoomScreenShareContainer() {
  const { handleScreenShare, peersState } = useRoomContext();

  console.log(peersState);
  return (
    <Container>
      <div className="screen-share-text">
        <div className="title">화면을 공유하면 모두에게 화면이 보여집니다.</div>
        <div className="share-button" onClick={handleScreenShare}>
          내 화면 공유
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #000105;
  padding: 5px 18px 0px 18px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;

  .screen-share-text {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .title {
      font-size: 18px;
      color: #ffffff;
      margin-bottom: 40px;
    }

    .share-button {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: ${(props) => props.theme.plainBoldTextFont};
      background: #3653ff;
      font-size: 23px;
      padding: 5px;
      width: 163px;
      height: 43px;
      color: #ffffff;
      border-radius: 21px;
    }
  }
`;
