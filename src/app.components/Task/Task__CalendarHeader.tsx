import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { useTaskContext } from 'app.components/Task/TaskProvider';

export default function TaskCalendarHeader() {
  const {
    calendarShowYear,
    calendarShowMonth,
    setCalendarShowYear,
    setCalendarShowMonth,
  } = useTaskContext();

  return (
    <Container>
      <div className="chevron">
        <FontAwesomeIcon
          icon={faChevronLeft}
          onClick={() => {
            if (calendarShowMonth === 1) {
              setCalendarShowYear(calendarShowYear - 1);
              setCalendarShowMonth(12);
            } else {
              setCalendarShowMonth(calendarShowMonth - 1);
            }
          }}
          size="2x"
        />
      </div>
      <DateContainer>
        <Day>{`${calendarShowYear}년 ${calendarShowMonth}월`}</Day>
      </DateContainer>
      <div className="chevron">
        <FontAwesomeIcon
          icon={faChevronRight}
          onClick={() => {
            if (calendarShowMonth === 12) {
              setCalendarShowYear(calendarShowYear + 1);
              setCalendarShowMonth(1);
            } else {
              setCalendarShowMonth(calendarShowMonth + 1);
            }
          }}
          size="2x"
        />
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: fit-content;
  padding: 30px 0;

  .chevron {
    cursor: pointer;
    margin: 0 20px;
    color: #0043a5;
  }
`;

const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 42px;
  font-family: ${(props) => props.theme.plainBoldTextFont};
  color: #0043a5;
  width: 180px;
`;

const Day = styled.div`
  font-size: 25px;
`;
