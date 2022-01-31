import React from 'react';
import styled from 'styled-components';
import ScreenHome from 'app.feature/home/screen/ScreenHome';

const Page_Home: any = () => {
  return (
    <StyledWrapper>
      <ScreenHome />
    </StyledWrapper>
  );
};

export default Page_Home;

const StyledWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 80%;
  margin: 0 auto;
`;
