import React from 'react';
import styled from 'styled-components';

const dayName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function TaskWeek() {
  const today = new Date();
  const date = today.getDate();
  const calculate = today;
  calculate.setDate(date - today.getDay());

  return (
    <Container>
      <div className="week-wrap">
        {dayName.map((item, idx) => {
          const sundayDate = calculate;
          sundayDate.setDate(calculate.getDate() + (idx === 0 ? 0 : 1));

          return (
            <div className={`week ${idx === 0}`} key={idx}>
              <div className="day">{item}</div>
              <div className={`date ${date === sundayDate.getDate()}`}>
                {sundayDate.getDate()}
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
