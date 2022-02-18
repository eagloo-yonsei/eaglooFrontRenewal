import React from 'react';
import styled from 'styled-components';
import { useEntryContext } from 'pages/entry';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const EntryClose = () => {
  const { handleStopSelfStream, handleExitToList } = useEntryContext();

  return (
    <StyledWrapper
      onClick={() => {
        handleStopSelfStream();
        handleExitToList();
      }}
    >
      <FontAwesomeIcon icon={faTimes} size="2x" />
    </StyledWrapper>
  );
};

export default EntryClose;

const StyledWrapper = styled.div`
  position: absolute;
  top: 40px;
  right: 45px;
  color: var(--color-main);
  cursor: pointer;
`;
