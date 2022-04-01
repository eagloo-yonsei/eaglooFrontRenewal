import React from 'react';
import styled from 'styled-components';
import { useGetUser } from 'app.store/intoAPP/store.intoAPP';
import { useTaskContext } from 'app.components/Task/TaskProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import TaskEach from 'app.components/Task/Task__Each';
import TaskGroup from 'app.components/Task/Task__Group';

export default function TaskContent() {
  const { login: isLoggedIn, isLoading } = useGetUser();
  const { taskOpen, tasks, taskLoading, taskLoadingError } = useTaskContext();

  if (isLoading) return null;
  if (!isLoggedIn) return <Unauthorized />;

  if (taskLoading) return <TaskLoading />;

  if (taskLoadingError) return <TaskLoadingError />;

  if (!taskLoading && tasks.length === 0) return <TaskEmpty />;

  return (
    <Container taskOpen={taskOpen}>
      <TaskSorter />
      <ScrollContainer>
        {tasks.map((task) => {
          return <TaskEach key={task.id} task={task} />;
        })}
      </ScrollContainer>
      <TaskGroup taskOpen={taskOpen} tasks={tasks} />
    </Container>
  );
}

function Unauthorized() {
  const { taskOpen } = useTaskContext();
  return (
    <Container
      taskOpen={taskOpen}
    >{`이글루 회원이 되어 스케쥴러 기능을 사용해보세요!`}</Container>
  );
}

function TaskLoading() {
  const { taskOpen } = useTaskContext();
  return (
    <Container taskOpen={taskOpen}>{`일정을 가져오는 중입니다`}</Container>
  );
}

function TaskLoadingError() {
  const { taskOpen } = useTaskContext();
  return (
    <Container taskOpen={taskOpen}>
      {`일정을 불러오는 데 실패했습니다.`}
    </Container>
  );
}

function TaskEmpty() {
  const { taskOpen } = useTaskContext();
  return (
    <Container taskOpen={taskOpen}>
      {`아직 일정이 없습니다. 새로운 일정을 추가해 보세요!`}
    </Container>
  );
}

function TaskSorter() {
  const { taskSorted, sortedByImportanceAscending, sortTasksByImportance } =
    useTaskContext();

  return (
    <TaskSorterContainer>
      {taskSorted && (
        <FontAwesomeIcon
          icon={sortedByImportanceAscending ? faCaretUp : faCaretDown}
        />
      )}
      <TaskSortMessage
        onClick={() => {
          sortTasksByImportance(true);
        }}
      >{`중요도순`}</TaskSortMessage>
    </TaskSorterContainer>
  );
}

const Container = styled.div`
  width: 100%;
  font-size: 20px;
  font-family: ${(props) => props.theme.subLabelFont};
`;

const TaskSorterContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  color: #b3d0ff;
  margin-bottom: 25.2px;
  font-family: ${(props) => props.theme.plainBoldTextFont};
`;

const TaskSortMessage = styled.div`
  font-size: 12.5px;
  cursor: pointer;
  margin-left: 7px;
`;

const ScrollContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 180px;
  overflow-y: auto;
  margin-bottom: 34.8px;
`;
