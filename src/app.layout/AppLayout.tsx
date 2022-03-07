import React from 'react';
import styled from 'styled-components';
import AppHeader from './header/AppHeader';
import Scheduler from 'app.components/Scheduler';
import SchedulerOpenButton from 'app.components/Scheduler/Scheduler__OpenButton';
import { useRouter } from 'next/router';

const AppLayout = ({ componentContent }) => {
  const router = useRouter();

  if (router.pathname.includes('room') && !router.pathname.includes('entry'))
    return (
      <StyledWrapper>
        <div className="app-component-room">{componentContent}</div>
        <Scheduler />
        <SchedulerOpenButton />
      </StyledWrapper>
    );

  return (
    <StyledWrapper>
      <AppHeader />
      <div className="app-component">{componentContent}</div>
      <Scheduler />
      <SchedulerOpenButton />
    </StyledWrapper>
  );
};

export default AppLayout;

const StyledWrapper = styled.div`
  max-width: 100vw;
  overflow-x: hidden;
  min-width: 1024px;
  height: 100vh;
  min-height: 768px;
  position: relative;
  background: var(--color-blue-gradient);

  .app-component {
    height: calc(100vh - 160px);
    min-height: calc(100% - 160px);
  }

  .app-component-room {
    height: 100vh;
    min-height: 100%;
  }
`;
