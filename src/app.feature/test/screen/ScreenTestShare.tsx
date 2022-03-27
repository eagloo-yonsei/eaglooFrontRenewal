import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const Page_Test = (socketRef, userInfo) => {
  const userStreamHTMLRef = useRef<HTMLVideoElement>(null);
  const [streaming, setStreaming] = useState(false);

  const requestScreenSharing = async () => {
    if (userStreamHTMLRef?.current) {
      setStreaming(true);
      navigator.mediaDevices
        .getDisplayMedia({
          audio: true,
          video: true,
        })
        .then((stream) => {
          stream.getAudioTracks().forEach((audioTrack) => {
            audioTrack.enabled = false;
          });
          userStreamHTMLRef.current.srcObject = stream;
        });
    }
  };

  const stopScreenSharing = async () => {
    userStreamHTMLRef.current.srcObject = null;
  };
  return (
    <StyledWrapper>
      <button onClick={streaming ? stopScreenSharing : requestScreenSharing}>
        스크린 쉐어링
      </button>
      <video ref={userStreamHTMLRef} muted autoPlay playsInline />
    </StyledWrapper>
  );
};

export default Page_Test;

const StyledWrapper = styled.div`
  video {
    width: 100%;
    height: 100%;
  }
`;
