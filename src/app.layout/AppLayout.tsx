import React from 'react';
import styled from 'styled-components';
import AppHeader from './header/AppHeader';

const AppLayout = ({ componentContent }) => {
  return (
    <StyledWrapper>
      <AppHeader />
      <div className="app-component">{componentContent}</div>
    </StyledWrapper>
  );
};

export default AppLayout;

const StyledWrapper = styled.div`
  width: 100vw;
  min-width: 1024px;
  height: 100vh;
  min-height: 768px;

  .app-component {
    height: calc(100vh - 160px);
    min-height: calc(100% - 160px);
  }
`;
