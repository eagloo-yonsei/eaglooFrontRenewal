import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { useTaskContext } from 'app.components/Task/TaskProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendar,
  faPen,
  faPlus,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';

const TaskCalendarDayTask = ({ showDay, day }) => {
  const {
    taskOpen,
    tasks,
    taskLoading,
    taskLoadingError,
    handleTaskModalOpen,
    handleCalendarMode,
    deleteTask,
    handleCalendarDayTask,
  } = useTaskContext();

  console.log(day);
  return (
    <StyledWrapper
      day={day <= 3 ? 'left' : 'right'}
      onClick={(event) => {
        event.stopPropagation();
        handleCalendarDayTask(showDay);
      }}
    >
      <div className="task-wrap">
        {!taskLoading &&
          tasks.map((task, idx) => {
            const [taskContentInput, setTaskContentInput] = useState<string>(
              task?.content ?? ''
            );
            return (
              <div className="task-item" key={`task-date-${task.id}`}>
                <div className="task-item-left">
                  <div className="task-color" />
                  <input
                    className="task-content"
                    value={taskContentInput}
                    onChange={(e) => {
                      if (e.target.value.length <= 30) {
                        setTaskContentInput(e.target.value);
                      }
                    }}
                  />
                </div>
                <div className="task-item-right">
                  <FontAwesomeIcon icon={faPen} className="edit-button" />
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="remove-button"
                    onClick={() => deleteTask(task.id)}
                  />
                </div>
              </div>
            );
          })}
      </div>
      <div className="bottom-wrap">
        <div className="bottom-plus" onClick={handleTaskModalOpen}>
          <FontAwesomeIcon icon={faPlus} />
        </div>
        <div className="bottom-calendar" onClick={handleCalendarMode}>
          <FontAwesomeIcon icon={faCalendar} size="2x" />
        </div>
      </div>
    </StyledWrapper>
  );
};

export default TaskCalendarDayTask;

const StyledWrapper = styled.div`
  ${({ day }) => css`
    ${day === 'left' ? 'left : 0' : 'right: 0'};
  `}
  position: absolute;
  top: 30px;
  right: 0;
  z-index: 100;
  width: 275px;
  height: 235px;
  background: #b3d0ff 0% 0% no-repeat padding-box;
  border-radius: 4px 20px 20px 20px;
  opacity: 1;
  padding: 16px 13px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .task-wrap {
    height: 160px;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 5px;
    }

    &::-webkit-scrollbar-track {
      background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: white;
    }

    &::-webkit-scrollbar-button {
      width: 0;
      height: 0;
    }

    .task-item {
      margin-bottom: 7px;
      margin-right: 5px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 30px;
      border-radius: 0px 15px 15px 0px;
      background: #ffffff;

      .task-item-left {
        display: flex;

        .task-color {
          height: 30px;
          padding-left: 10px;
          border-left: 8px solid #ffd008;
        }

        .task-content {
          border: none;
          font-size: 13px;
          line-height: 30px;
          padding: 0;
          color: #0043a5;
          color: ${(props) =>
            props.taskDone ? props.theme.taskLightBlue : '#0043a5'};
          font-family: ${(props) => props.theme.plainBoldTextFont};
          background-color: inherit;

          :focus {
            outline: none;
          }
        }
      }

      .task-item-right {
        margin-right: 10px;
        color: #b3d0ff;

        .edit-button {
          margin-right: 10px;
          cursor: pointer;
        }

        .remove-button {
          cursor: pointer;
        }
      }
    }
  }

  .bottom-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .bottom-plus {
      cursor: pointer;
      width: 40px;
      height: 40px;
      background-color: white;
      border-radius: 11px;
      color: #b3d0ff;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .bottom-calendar {
      cursor: pointer;
      width: 40px;
      height: 40px;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
