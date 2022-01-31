import React from 'react';
import styled from 'styled-components';
import { fadeIn } from 'app.styled/keyframe';

const Page_Profile = () => {
  return <StyledWrapper>프로필</StyledWrapper>;
};

export default Page_Profile;

const StyledWrapper = styled.div`
  animation: ${fadeIn} 500ms;
`;
