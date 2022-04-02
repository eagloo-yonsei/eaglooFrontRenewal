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

export default function TaskContainer() {
  const { taskOpen, taskModalOpen, handleTaskModalOpen } = useTaskContext();
  return (
    <>
      <TaskModal open={taskModalOpen} onClose={handleTaskModalOpen} />
      <TaskOuterContainer taskOpen={taskOpen}>
        <TaskInnerContainer>
          <TaskWeek />
          <TaskSlide />
          <TaskContent />
          {/*<TaskBody />*/}
        </TaskInnerContainer>
      </TaskOuterContainer>
      <TaskInput />
    </>
  );
}

const TaskOuterContainer = styled.div<{ taskOpen: boolean }>`
  position: relative;
  display: flex;
  padding: 0px 57px 0 61px;
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
  padding-bottom: 90px;
`;
