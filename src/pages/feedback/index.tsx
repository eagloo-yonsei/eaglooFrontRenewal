import { fadeIn } from 'app.styled/keyframe';
import React from 'react';
import styled from 'styled-components';
import ScreenFeedback from 'app.feature/feedback/screen/ScreenFeedback';

const Page_Feedback = () => {
  return (
    <StyledWrapper>
      <ScreenFeedback />
    </StyledWrapper>
  );
};

export default Page_Feedback;

const StyledWrapper = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  font-family: 'JejuGothic';
  padding: 80px 120px 60px 120px;
  border-radius: 35px 35px 0 0;
  margin: 0 auto;
  overflow: hidden;
  width: 80%;
  height: 100%;
  background-color: var(--color-white);
  animation: ${fadeIn} 500ms;
`;
