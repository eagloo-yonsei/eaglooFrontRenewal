import React from 'react';
import styled from 'styled-components';
import { fadeIn } from 'app.styled/keyframe';
import ScreenProfile from 'app.feature/profile/screen/ScreenProfile';

const Page_Profile = () => {
  return (
    <StyledWrapper>
      <ScreenProfile />
    </StyledWrapper>
  );
};

export default Page_Profile;

const StyledWrapper = styled.div`
  padding: 80px 100px 40px;
  border-radius: 35px 35px 0 0;
  margin: 0 auto;
  overflow: hidden;
  width: 80%;
  height: 100%;
  background-color: var(--color-white);
  animation: ${fadeIn} 500ms;
`;
