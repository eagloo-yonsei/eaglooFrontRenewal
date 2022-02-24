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

  &:before {
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.4;
    background: url('/images/common/HomeImg__Yonsei-min.png');
    background-repeat: no-repeat;
    background-position: right top;
    background-size: auto 480px;
  }
`;
