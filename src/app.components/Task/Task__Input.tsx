import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { useTaskContext } from './TaskProvider';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TaskImportance from './Task__Importance';
import { useGetUser } from 'app.store/intoAPP/store.intoAPP';

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
  } = useTaskContext();

  if (isLoading) return null;
  return (
    <Container>
      <NewTaskInput
        ref={newTaskInputRef}
        disabled={
          !isLoggedIn || taskLoading || taskLoadingError || taskUploading
        }
        type="text"
        spellCheck="false"
        value={newTaskInput}
        placeholder="새 일정을 입력해주세요"
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
      {/* <NewTaskDday /> */}
      {/* <TaskDdayBox /> */}
      <NewTaskImportance />
    </Container>
  );
}

function NewTaskDday() {
  const { newTaksDday, setNewTaskDday } = useTaskContext();

  return (
    <DatePicker
      selected={newTaksDday}
      onChange={(date) => setNewTaskDday(date as Date)}
    />
  );
}

function NewTaskImportance() {
  const { newTaskImportance, selectNewTaskImportance } = useTaskContext();
  return (
    <NewTaskImportanceContainer>
      {`중요도`}
      <TaskImportance
        importance={newTaskImportance}
        importanceSettingFunc={selectNewTaskImportance}
      />
    </NewTaskImportanceContainer>
  );
}

const Container = styled.div`
  position: absolute;
  bottom: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  font-family: ${(props) => props.theme.subLabelFont};
  padding: 5px 25px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-color: ${(props) => props.theme.mainDarkBlue};
`;

const NewTaskInput = styled.input`
  width: calc(100% - 190px);
  color: white;
  background-color: inherit;
  font-size: 16px;
  padding: 10px 10px;
  margin-right: 15px;
  border: none;
  border-bottom: 2px solid ${(props) => props.theme.mainLightBlue};
  font-family: ${(props) => props.theme.subLabelFont};
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
  font-family: ${(props) => props.theme.subLabelFont};
  background-color: white;
`;

const NewTaskImportanceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
  height: 100%;
  color: white;
  font-size: 15px;
  font-family: ${(props) => props.theme.subLabelFont};
`;
