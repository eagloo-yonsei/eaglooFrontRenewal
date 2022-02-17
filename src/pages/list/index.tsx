import React from 'react';
import styled from 'styled-components';
import ScreenList from 'app.feature/list/screen/ScreenList';
import { fadeIn } from 'app.styled/keyframe';

const Page_List = () => {
  return (
    <StyledWrapper>
      <ScreenList />
    </StyledWrapper>
  );
};

export default Page_List;

const StyledWrapper = styled.div`
  padding: 35px 70px 0;
  border-radius: 35px 35px 0 0;
  margin: 0 auto;
  overflow: hidden;
  width: 80%;
  height: 100%;
  background-color: var(--color-white);
  animation: ${fadeIn} 500ms;
`;
