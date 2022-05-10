import React from 'react';
import styled from 'styled-components';
import TaskToggleHeader from './Task__ToggleHeader';
import TaskWeek from './Task__Week';
import TaskSlide from './Task__Slide';
import TaskBody from './Task__Body';
import TaskInput from './Task__Input';
import { useTaskContext } from './TaskProvider';
import TaskContent from 'app.components/Task/Task__Content';
import TaskModal from 'app.components/Task/Task__Modal';
import TaskCalendar from 'app.components/Task/Task__Calendar';

export default function TaskContainer() {
  const {
    calendarMode,
    handleCalendarMode,
    taskOpen,
    taskModalOpen,
    handleTaskModalOpen,
  } = useTaskContext();
  return (
    <>
      <TaskModal open={taskModalOpen} onClose={handleTaskModalOpen} />
      <TaskOuterContainer taskOpen={taskOpen}>
        {calendarMode ? (
          <TaskCalendar />
        ) : (
          <TaskInnerContainer>
            <TaskWeek />
            <TaskSlide />
            <TaskContent />
            {/*<TaskBody />*/}
          </TaskInnerContainer>
        )}
      </TaskOuterContainer>
      {!calendarMode && <TaskInput />}
    </>
  );
}

const TaskOuterContainer = styled.div<{ taskOpen: boolean }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: calc(100% - 102px);
  transition: all 0.5s ${(props) => props.theme.animationCubic};
`;

const TaskInnerContainer = styled.div`
  position: relative;
  display: flex;
  overflow-y: scroll;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0px 57px 90px 61px;
`;
