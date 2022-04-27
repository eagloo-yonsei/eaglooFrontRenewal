import React, { useState } from 'react';
import styled from 'styled-components';
import { useRoomContext } from 'app.feature/room/screen/ScreenRoomProvider';

export default function RoomControlButtons() {
  const { stopSelfStream, exitToList, boardState, handleBoardState } =
    useRoomContext();

  return (
    <Container>
      <MicControlButton />
      <RoomButtons className="room-button-wrap">
        <div className="room-button-left">
          <div
            className={`seat-button ${boardState === 'postBoard'}`}
            onClick={() => handleBoardState('postBoard')}
          >
            포스트보드
          </div>
          <div
            className={`seat-button ${boardState === 'whiteBoard'}`}
            onClick={() => handleBoardState('whiteBoard')}
          >
            화이트보드
          </div>
          <div
            className={`seat-button ${boardState === 'screenShare'}`}
            onClick={() => handleBoardState('screenShare')}
          >
            화면 공유
          </div>
        </div>
        <div className="room-button-right">
          <div
            className="exit-button"
            onClick={() => {
              stopSelfStream();
              exitToList();
            }}
          >
            {`나가기`}
          </div>
        </div>
      </RoomButtons>
    </Container>
  );
}

function MicControlButton() {
  const { roomInfo, userMuted, muteSelfAudio, unmuteSelfAudio } =
    useRoomContext();

  if ('allowMic' in roomInfo && roomInfo.allowMic) {
    return (
      <>
        {userMuted ? (
          <ResumeMicButton
            onClick={() => {
              unmuteSelfAudio();
            }}
          >{`음소거 해제`}</ResumeMicButton>
        ) : (
          <HaltMicButton
            onClick={() => {
              muteSelfAudio();
            }}
          >{`음소거`}</HaltMicButton>
        )}
      </>
    );
  } else {
    return null;
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 100%;
  height: 100%;
`;

const MicrophoneControlButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40%;
  font-size: 21px;
  font-family: ${(props) => props.theme.inButtonFont};
  border-radius: 15px;
  padding: 15px;
  cursor: pointer;
`;

const HaltMicButton = styled(MicrophoneControlButton)`
  color: red;
  border: 3px solid red;
`;
const ResumeMicButton = styled(MicrophoneControlButton)`
  color: white;
  border: 3px solid white;
`;

const RoomButtons = styled.div`
  display: flex;
  gap: 10px;
  font-size: 17px;
  font-family: ${(props) => props.theme.plainBoldTextFont};

  @media only screen and (max-width: 1300px) {
    font-size: 12.5px;
  }

  .room-button-left {
    display: flex;
    gap: 7px;
    flex-direction: column;
  }

  .room-button-right {
    height: 100%;
    display: flex;
    align-items: end;
  }

  .seat-button {
    cursor: pointer;
    text-align: center;
    border-radius: 22px;
    padding: 7px;
    color: #ffffff;
    background: rgba(256, 256, 256, 0.5);

    &.true {
      background: #ffffff;
      color: #3653ff;
    }
  }

  .exit-button {
    cursor: pointer;
    text-align: center;
    color: white;
    border-radius: 22px;
    padding: 7px;
    background: ${(props) => props.theme.orangeGradient};
  }
`;

const ExitButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40%;
  color: white;
  font-size: 24px;
  font-family: ${(props) => props.theme.inButtonFont};
  border-radius: 15px;
  background: ${(props) => props.theme.orangeGradient};
  cursor: pointer;
`;
