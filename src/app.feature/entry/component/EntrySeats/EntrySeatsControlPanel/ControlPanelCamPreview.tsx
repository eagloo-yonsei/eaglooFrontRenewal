import React from 'react';
import styled from 'styled-components';
import { useEntryContext } from 'pages/entry';

const ControlPanelCamPreview = () => {
  const { camAccepted, userStreamHTMLRef } = useEntryContext();

  if (!camAccepted)
    return <StyledWrapper>카메라 권한을 허용해주세요</StyledWrapper>;

  return (
    <StyledWrapper>
      {userStreamHTMLRef && (
        <video
          className="user-cam"
          ref={userStreamHTMLRef}
          muted
          autoPlay
          playsInline
        />
      )}
    </StyledWrapper>
  );
};

export default ControlPanelCamPreview;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  width: 42%;
  height: 92.5%;
  color: white;
  font-size: 14px;
  font-family: 'SamlipHopang';
  background-color: black;
  border-radius: 15px;
  overflow: hidden;

  .user-cam {
    max-width: 100%;
    max-height: 100%;
  }
`;
