import React, { useState } from 'react';
import styled from 'styled-components';
import { useTaskContext } from './TaskProvider';
import TaskImportance from './Task__Importance';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Task } from 'app.modules/constant/interface';

export default function TaskGroupEach({ task }: { task: Task }) {
  const { updateTask, deleteTask } = useTaskContext();
  const [taskDone, setTaskDone] = useState<boolean>(task.done);
  const [previousTaskContent, setPreviousTaskContent] = useState<string>(
    task.content
  );
  const [taskContentInput, setTaskContentInput] = useState<string>(
    task.content
  );
  const [taskImportance, setTaskImportance] = useState<number>(task.importance);
  const [updating, setUpdating] = useState<boolean>(false);

  async function updateImportance(importance: number) {
    if (updating) {
      return;
    }
    if (await updateTask(task.id, taskDone, previousTaskContent, importance)) {
      setTaskImportance(importance);
    }
  }

  // TODO (code clearance) Task update 시 건드리지 않는 인자는 안 보내도록 설정
  return (
    <Container>
      <ContainerLeft>
        <CheckBox
          taskDone={taskDone}
          onClick={async () => {
            if (updating) {
              return;
            }
            setUpdating(true);
            if (
              await updateTask(
                task.id,
                !taskDone,
                previousTaskContent,
                taskImportance
              )
            ) {
              setTaskDone(!taskDone);
            }
            setUpdating(false);
          }}
        >
          {taskDone && <FontAwesomeIcon icon={faCheck} />}
        </CheckBox>
        <TaskContent
          disabled={updating}
          type="text"
          spellCheck="false"
          value={taskContentInput}
          taskDone={taskDone}
          onChange={(e) => {
            if (e.target.value.length <= 30) {
              setTaskContentInput(e.target.value);
            }
          }}
          onKeyPress={async (e) => {
            if (e.key === 'Enter') {
              setUpdating(true);
              if (
                await updateTask(
                  task.id,
                  taskDone,
                  taskContentInput,
                  taskImportance
                )
              ) {
                setPreviousTaskContent(taskContentInput);
              }
              setUpdating(false);
            }
          }}
        />
      </ContainerLeft>
      {previousTaskContent !== taskContentInput && (
        <ContainerRight>
          <ConfirmButton
            onClick={async () => {
              if (updating) {
                return;
              }
              setUpdating(true);
              if (
                await updateTask(
                  task.id,
                  taskDone,
                  taskContentInput,
                  taskImportance
                )
              ) {
                setPreviousTaskContent(taskContentInput);
              }
              setUpdating(false);
            }}
          >{`변경`}</ConfirmButton>
          <CancelButton
            onClick={() => {
              setTaskContentInput(previousTaskContent);
            }}
          >{`취소`}</CancelButton>
        </ContainerRight>
      )}
    </Container>
  );
}

const RemoveIcon = styled.div`
  font-size: 16px;
  color: #79a4d8;
  :hover {
    color: #3e7bb7;
  }

  opacity: 0;
  transition: opacity 0.2s linear;
  margin-left: 18px;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 18px;

  &:last-child {
    margin-bottom: 9px;
  }

  &:hover {
    ${RemoveIcon} {
      opacity: 1;
    }
  }
`;

const ContainerLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 70%;
`;

const ContainerRight = styled(ContainerLeft)`
  justify-content: flex-end;
  width: 30%;
`;

const CheckBox = styled.div<{ taskDone: boolean }>`
  width: 21.8px;
  height: 21.8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  margin-left: 15px;
  border-radius: 5px;
  border: solid 2px #ffa28d;
  border: 2px solid
    ${(props) => (props.taskDone ? '#ffa28d' : 'props.theme.taskLightBlue')};
  color: white;
  background-color: ${(props) => props.taskDone && '#ffa28d'};
  cursor: pointer;

  svg {
    display: block;
    width: 15px !important;
  }
`;

const TaskContent = styled.input<{ taskDone: boolean }>`
  width: calc(100% - 56px);
  border: none;
  color: ${(props) => (props.taskDone ? props.theme.taskLightBlue : '#0043a5')};
  font-size: 16.4px;
  font-family: ${(props) => props.theme.plainBoldTextFont};
  background-color: inherit;

  :focus {
    outline: none;
  }
`;

const ConfirmButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 21.8px;
  color: white;
  font-size: 13px;
  font-family: ${(props) => props.theme.plainBoldTextFont};
  background-color: ${(props) => props.theme.mainBlue};
  border-radius: 6px;
  cursor: pointer;
`;

const CancelButton = styled(ConfirmButton)`
  background-color: red;
  margin-left: 12px;
`;

const TaskDDay = styled.div`
  color: #0043a5;
  margin-right: 15px;
  font-size: 15px;
  font-family: ${(props) => props.theme.plainBoldTextFont};
`;
