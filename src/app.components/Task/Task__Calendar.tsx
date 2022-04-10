import React from 'react';
import styled from 'styled-components';

const TaskCalendar = () => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const endDay = new Date(currentYear, currentMonth + 1, 0);

  console.log(endDay);

  return (
    <StyledWrapper>
      <div className="calendar-wrap">
        {Array.from({ length: Number(endDay.getDay()) }, (v, i) => (
          <div className="day"></div>
        ))}
        {Array.from({ length: Number(endDay.getDate()) }, (v, i) => (
          <div className="day">{i + 1}</div>
        ))}
      </div>
    </StyledWrapper>
  );
};

export default TaskCalendar;

const StyledWrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 0 53px 0 61px;

  .calendar-wrap {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
  }
`;
