import React from 'react';
import styled from 'styled-components';

const dayName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function TaskWeek() {
  const today = new Date();
  const DaysBefore = new Date(today.setDate(today.getDate() - 4));

  return (
    <Container>
      <div className="week-wrap">
        {[0, 1, 2, 3, 4, 5, 6].map((item, idx) => {
          DaysBefore.setDate(DaysBefore.getDate() + 1);
          return (
            <div className={`week ${DaysBefore.getDay() === 0}`} key={idx}>
              <div className="day">{dayName[DaysBefore.getDay()]}</div>
              <div
                className={`date ${
                  DaysBefore.getDate() === new Date().getDate()
                }`}
              >
                {DaysBefore.getDate()}
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;

  .week-wrap {
    width: 100%;
    display: flex;
    align-content: center;
    justify-content: space-between;
    margin-bottom: 12.8px;

    .week {
      text-align: center;
      font-family: ${(props) => props.theme.plainBoldTextFont};
      color: #1d74ff;
      font-size: 12px;

      &.true {
        color: #ff7d5a;

        .date {
          &.true {
            background-color: #ff7d5a;
          }
        }
      }

      .day {
        margin-bottom: 12.5px;
      }

      .date {
        width: 26px;
        height: 26px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;

        &.true {
          color: white;
          background-color: #1d74ff;
        }
      }
    }
  }
`;
