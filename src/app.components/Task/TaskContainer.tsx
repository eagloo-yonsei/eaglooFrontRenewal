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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import TaskHeader from 'app.components/Task/Task__Header';
import TaskCalendarHeader from 'app.components/Task/Task__CalendarHeader';

export default function TaskContainer() {
  const {
    calendarMode,
    handleCalendarMode,
    taskOpen,
    taskModalOpen,
    handleTaskModalOpen,
    handleCalendarDayTask,
  } = useTaskContext();

  return (
    <>
      <TaskModal open={taskModalOpen} onClose={handleTaskModalOpen} />
      <TaskOuterContainer
        taskOpen={taskOpen}
        onClick={() => calendarMode && handleCalendarDayTask(0)}
      >
        <div className="calendar-button">
          <FontAwesomeIcon
            icon={faCalendar}
            onClick={handleCalendarMode}
            size="2x"
          />
        </div>
        {calendarMode ? (
          <TaskInnerContainer>
            <TaskCalendarHeader />
            <TaskCalendar />
          </TaskInnerContainer>
        ) : (
          <TaskInnerContainer>
            <TaskHeader />
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

  .calendar-button {
    position: absolute;
    top: 30px;
    left: 61px;
    color: #b3d0ff;
    cursor: pointer;
    z-index: 100;
  }
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
