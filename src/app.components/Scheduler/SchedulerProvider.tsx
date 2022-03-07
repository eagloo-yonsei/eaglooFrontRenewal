import React, { createContext, useContext } from 'react';

interface SchedulerContextProp {}

const InitialSchedulerContext: SchedulerContextProp = {};

const SchedulerContext = createContext<SchedulerContextProp>(
  InitialSchedulerContext
);
export const useSchedulerContext = () => useContext(SchedulerContext);

export default function SchedulerProvider({ children }) {
  const schedulerContext = {};

  return (
    <SchedulerContext.Provider value={schedulerContext}>
      {children}
    </SchedulerContext.Provider>
  );
}
