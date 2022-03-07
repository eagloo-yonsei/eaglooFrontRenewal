import React from 'react';
import styled from 'styled-components';
import { fadeIn } from 'app.styled/keyframe';
import { useEntryContext } from 'app.feature/entry/screen/ScreenEntryProvider';
import EntryHeader from 'app.feature/entry/component/Entry__Header';
import Entry14Seats from 'app.feature/entry/component/Entry__14Seats/Entry__14Seats';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const ScreenEntry = () => {
  const { stopSelfStream, exitToList } = useEntryContext();

  return (
    <>
      <ModalBackground
        onClick={() => {
          stopSelfStream();
          exitToList();
        }}
      />
      <StyledWrapper>
        <EntryHeader />
        <Entry14Seats />
        <CloseIcon />
      </StyledWrapper>
    </>
  );
};

function CloseIcon() {
  const { stopSelfStream, exitToList } = useEntryContext();
  return (
    <EntryClose
      onClick={() => {
        stopSelfStream();
        exitToList();
      }}
    >
      <FontAwesomeIcon icon={faTimes} size="2x" />
    </EntryClose>
  );
}

export default ScreenEntry;

const ModalBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 768px;
  background-color: black;
  opacity: 0.2;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  font-family: NexonGothicLv1Bold;
  padding: 60px 80px 30px;
  height: 100%;

  border-radius: 35px 35px 0 0;
  margin: 0 auto;
  overflow: hidden;
  width: 80%;
  background-color: var(--color-white);
  animation: ${fadeIn} 500ms;
`;

const EntryClose = styled.div`
  position: absolute;
  top: 40px;
  right: 45px;
  color: ${(props) => props.theme.entryMainBlue};
  cursor: pointer;
`;
