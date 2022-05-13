import React, { useState } from 'react';
import styled from 'styled-components';
import TaskCalendarDayTask from 'app.components/Task/Task__CalendarDayTask';
import { useTaskContext } from 'app.components/Task/TaskProvider';
const dayName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const TaskCalendar = () => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const endDay = new Date(currentYear, currentMonth + 1, 0);
  const startDay = new Date(currentYear, currentMonth, 1);
  const today = new Date();
  const date = today.getDate();
  const calculate = today;
  calculate.setDate(date - today.getDay());

  const { calendarDayTask, handleCalendarDayTask } = useTaskContext();

  return (
    <StyledWrapper>
      <div className="calendar-wrap">
        <div className="week-wrap">
          {dayName.map((item, idx) => {
            return (
              <div className={`week ${idx === 0}`} key={idx}>
                <div className="day">{item}</div>
              </div>
            );
          })}
        </div>
        <div className="day-wrap">
          {Array.from({ length: Number(startDay.getDay()) }, (v, i) => (
            <div className="day-item" key={i}></div>
          ))}
          {Array.from({ length: Number(endDay.getDate()) }, (v, i) => {
            return (
              <div className={`day-item ${i + 1 === date} `} key={`day-${i}`}>
                <div
                  className={`day ${i + 1 === date} show-${
                    calendarDayTask === i + 1
                  }`}
                  onClick={(event) => {
                    event.stopPropagation();
                    handleCalendarDayTask(i + 1);
                  }}
                >
                  {i + 1}
                </div>
                {calendarDayTask === i + 1 && (
                  <TaskCalendarDayTask
                    showDay={i + 1}
                    day={new Date(currentYear, currentMonth, i + 1).getDay()}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </StyledWrapper>
  );
};

export default TaskCalendar;

const StyledWrapper = styled.div`
  height: 100%;
  width: 100%;

  .calendar-wrap {
    .week-wrap {
      width: 100%;
      display: flex;
      align-content: center;
      justify-content: space-between;
      margin-bottom: 12.8px;

      .week {
        width: calc(100% / 7);
        text-align: center;
        font-family: ${(props) => props.theme.plainBoldTextFont};
        color: #1d74ff;
        font-size: 12px;
        margin-bottom: 12.5px;

        &.true {
          color: #ff7d5a;

          .date {
            &.true {
              background-color: #ff7d5a;
            }
          }
        }
      }
    }

    .day-wrap {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      text-align: center;
      font-family: ${(props) => props.theme.plainBoldTextFont};
      font-size: 16px;

      .day-item {
        position: relative;
        color: #1d74ff;
        height: 100px;
        display: flex;
        align-items: center;
        flex-direction: column;

        .day {
          cursor: pointer;
          z-index: 50;
          width: 26px;
          height: 26px;
          display: flex;
          align-items: center;
          justify-content: center;

          &.true {
            border-radius: 50%;
            color: white;
            background-color: #1d74ff;
          }

          &.show-true {
            border-radius: 50%;
            color: white;
            background-color: #b3d0ff;
          }
        }

        &:nth-child(7n + 1) {
          color: #ff7d5a !important;
        }
      }
    }
  }
`;
