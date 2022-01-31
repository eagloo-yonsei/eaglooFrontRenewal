import React from 'react';
import styled from 'styled-components';
import HomeBanner from 'app.feature/home/component/HomeBanner';
import HomeEntry from 'app.feature/home/component/HomeEntry';

const ScreenHome = () => {
  return (
    <StyledWrapper>
      <HomeBanner />
      <HomeEntry />
    </StyledWrapper>
  );
};

export default ScreenHome;

const StyledWrapper = styled.div`
  .room-wrap {
    display: flex;
  }
`;
