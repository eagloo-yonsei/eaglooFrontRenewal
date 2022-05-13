import React, { useEffect } from 'react';
import styled from 'styled-components';
import SchedulerHeader from './Scheduler__Header';
import Task from '../Task';
import { useStoreScheduler } from 'app.store/scheduler/store.scheduler';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { useTaskContext } from 'app.components/Task/TaskProvider';

export default function SchedulerContainer() {
  const schedulerOpen = useStoreScheduler((state) => state.schedulerOpen);

  return (
    <SchedulerOuterContainer schedulerOpen={schedulerOpen}>
      <SchedulerInnerContainer>
        {/*<Container>*/}
        {/*  <SchedulerHeader />*/}
        {/*</Container>*/}
        <Task />
      </SchedulerInnerContainer>
    </SchedulerOuterContainer>
  );
}

const SchedulerOuterContainer = styled.div<{ schedulerOpen: boolean }>`
  position: absolute;
  top: 120px;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: ${(props) => props.theme.slideMenuWidth};
  height: calc(100% - 190px);
  background-color: white;
  border-top-left-radius: 30.7px;
  border-bottom-left-radius: 30.7px;
  transform: translate(
    ${(props) => {
      return props.schedulerOpen ? '0' : props.theme.slideMenuWidth;
    }}
  );
  transition: all 0.5s ${(props) => props.theme.animationCubic};
  box-shadow: ${(props) =>
    props.schedulerOpen && 'rgba(0, 0, 0, 0.56) 0px 22px 70px 4px'};
`;

const SchedulerInnerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 102px;
`;
