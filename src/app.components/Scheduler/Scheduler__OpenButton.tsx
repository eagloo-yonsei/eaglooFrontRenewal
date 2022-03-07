import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useStoreScheduler } from 'app.store/scheduler/store.scheduler';
import { useRouter } from 'next/router';

export const todoLessPages = ['/login', '/signup'];

export default function SchedulerOpenButton() {
  const router = useRouter();

  if (todoLessPages.includes(router.pathname)) return null;
  const setSchedulerOpen = useStoreScheduler((state) => state.setSchedulerOpen);

  return (
    <Container
      onClick={() => {
        setSchedulerOpen();
      }}
    >
      {/* TODO (code clearance) TODO 버튼 글씨 */}
      <TODOIcon>
        <TODOLetter>{`T`}</TODOLetter>
        <TODOLetter>{`O`}</TODOLetter>
      </TODOIcon>
      <TODOIcon>
        <TODOLetter>{`D`}</TODOLetter>
        <TODOLetter>{`O`}</TODOLetter>
      </TODOIcon>
    </Container>
  );
}

const buttonShow = keyframes`
    from{
        transform: translateX(65px);
    }
    to{
        transform: translateX(0);
    }
`;

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 120px;
  right: 0;
  width: 65px;
  height: 65px;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  background-color: white;
  animation: ${buttonShow} 0.8s ${(props) => props.theme.animationCubic};
  :hover {
    cursor: pointer;
  }
  padding-top: 6px;
`;

const TODOIcon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 29px;
  height: 20px;
`;

const TODOLetter = styled.div`
  font-size: 18px;
  font-family: ${(props) => props.theme.iconFont};
  color: ${(props) => props.theme.mainBlue};
`;
