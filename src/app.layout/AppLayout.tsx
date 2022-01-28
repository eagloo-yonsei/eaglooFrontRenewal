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
  height: 100%;
  min-height: 100vh;
  background-color: var(--color-blue-gradient);

  .app-component {
    width: 100vw;
    min-width: 1024px;
    height: 100%;
  }
`;
