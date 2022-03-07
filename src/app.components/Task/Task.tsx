import React from 'react';
import TaskProvider from './TaskProvider';
import TaskContainer from './TaskContainer';
import { useGetUser } from 'app.store/intoAPP/store.intoAPP';

export default function Task() {
  const getUser = useGetUser();

  if (getUser?.isLoading) return null;
  return (
    <TaskProvider userInfo={getUser?.info}>
      <TaskContainer />
    </TaskProvider>
  );
}
