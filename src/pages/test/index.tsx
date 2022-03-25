import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Page_Test = () => {
  const userStreamHTMLRef = useRef<any>(null);

  useEffect(() => {
    getUserScreen();
  }, []);

  const getUserScreen = () => {
    navigator.mediaDevices
      .getDisplayMedia({
        audio: true,
        video: true,
      })
      .then(function (stream) {
        //success
        userStreamHTMLRef.current!.srcObject = stream;
        console.log(stream, 'success');
      })
      .catch(function (e) {
        //error;
        console.log('error', e);
      });
  };

  return (
    <StyledWrapper>
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
