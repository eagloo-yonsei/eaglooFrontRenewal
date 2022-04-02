import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { useTaskContext } from './TaskProvider';
import 'react-datepicker/dist/react-datepicker.css';
import TaskImportance from './Task__Importance';
import { useGetUser } from 'app.store/intoAPP/store.intoAPP';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCaretDown,
  faCaretUp,
  faEllipsisV,
} from '@fortawesome/free-solid-svg-icons';

export default function TaskInput() {
  const { login: isLoggedIn, isLoading } = useGetUser();

  const {
    newTaskInput,
    newTaksDday,
    taskLoading,
    taskLoadingError,
    taskUploading,
    setNewTaskInput,
    setNewTaskDday,
    createTask,
    newTaskInputRef,
    handleTaskModalOpen,
  } = useTaskContext();

  if (isLoading) return null;
  return (
    <Container>
      <FontAwesomeIcon
        className="more-icon"
        icon={faEllipsisV}
        onClick={handleTaskModalOpen}
      />
      <NewTaskInput
        ref={newTaskInputRef}
        disabled={
          !isLoggedIn || taskLoading || taskLoadingError || taskUploading
        }
        type="text"
        spellCheck="false"
        value={newTaskInput}
        placeholder="일정을 적어주세요"
        onChange={(e) => {
          if (e.target.value.length <= 30) {
            setNewTaskInput(e.target.value);
          }
        }}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            createTask();
          }
        }}
      />
      <NewTaskDday />
      {/* <TaskDdayBox /> */}
      <NewTaskImportance />
      <NewTaskGroup />
    </Container>
  );
}

function NewTaskDday() {
  const { newTaksDday, setNewTaskDday } = useTaskContext();

  return (
    // <DatePicker
    //   selected={newTaksDday}
    //   onChange={(date) => setNewTaskDday(date as Date)}
    // />
    <div className="new-task-dday">
      <div>디데이</div>
      <FontAwesomeIcon icon={faCaretUp} />
    </div>
  );
}

function NewTaskImportance() {
  const { newTaskImportance, selectNewTaskImportance } = useTaskContext();
  return (
    <NewTaskImportanceContainer>
      <div className="importance-text">중요도</div>
      <TaskImportance
        importance={newTaskImportance}
        importanceSettingFunc={selectNewTaskImportance}
      />
    </NewTaskImportanceContainer>
  );
}

function NewTaskGroup() {
  return (
    <NewTaskGroupContainer>
      <div>개인</div>
      <FontAwesomeIcon icon={faCaretUp} />
    </NewTaskGroupContainer>
  );
}

const Container = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 67.5px;
  font-family: ${(props) => props.theme.plainBoldTextFont};
  padding: 21px;
  border-radius: 20.6px 20.6px 0 20.6px;
  background-color: #e1edff;

  .react-datepicker__input-container {
    display: none;
  }

  .more-icon {
    &:hover {
      cursor: pointer;
    }
  }

  .new-task-dday {
    color: #0043a5;
    display: flex;
    min-width: 65px;
    margin-right: 20px;

    div {
      margin-right: 5px;
    }
  }
`;

const NewTaskInput = styled.input`
  border-radius: 5.4px;
  background-color: #fff;
  font-size: 16px;
  padding: 10px 10px;
  height: 24px;
  width: 100%;
  margin-left: 20px;
  margin-right: 12.5px;
  border: none;
  color: #0043a5;
  font-family: ${(props) => props.theme.plainBoldTextFont};

  :focus {
    outline: none;
  }
  ::placeholder {
    color: ${(props) => props.theme.mainLightBlue};
  }
`;

const TaskDdayBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 100%;
  margin-right: 15px;
  color: white;
  font-size: 15px;
  background-color: white;
`;

const NewTaskImportanceContainer = styled.div`
  display: flex;
  color: #0043a5;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  font-size: 15px;
  margin-right: 13.8px;

  .importance-text {
    width: 45px;
    margin-right: 6.5px;
  }

  .importance-circle {
    border: none;
  }
`;

const NewTaskGroupContainer = styled.div`
  width: 43px;
  word-break: keep-all;
  color: #0043a5;
  display: flex;

  div {
    margin-right: 5px;
  }
`;
