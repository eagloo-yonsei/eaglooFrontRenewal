import React from 'react';
import SchedulerProvider from './SchedulerProvider';
import SchedulerContainer from './SchedulerContainer';
import { useRouter } from 'next/router';

export const todoLessPages = ['/login', '/signup'];

export default function Scheduler() {
  const router = useRouter();
  if (todoLessPages.includes(router.pathname)) return null;

  return (
    <SchedulerProvider>
      <SchedulerContainer />
    </SchedulerProvider>
  );
}
