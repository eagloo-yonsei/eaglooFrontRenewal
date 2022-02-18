import React from 'react';
import styled from 'styled-components';
import ControlPanelCamPreview from './ControlPanelCamPreview';
import ControlPanelButtons from './ControlPanelButtons/ControlPanelButtons';

const EntrySeatsControlPanel = () => {
  return (
    <StyledWrapper>
      <ControlPanelCamPreview />
      <ControlPanelButtons />
    </StyledWrapper>
  );
};

export default EntrySeatsControlPanel;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 68.4%;
  height: 100%;
`;
