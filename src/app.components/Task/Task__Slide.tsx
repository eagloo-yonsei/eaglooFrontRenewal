import React from 'react';
import styled, { css } from 'styled-components';
import { useTaskContext } from 'app.components/Task/TaskProvider';

export default function TaskSlide() {
  const { taskPercentage } = useTaskContext();

  return (
    <Container percentage={taskPercentage}>
      <div className="task-slide-wrap">
        <div className="percentage">{taskPercentage.toFixed(2)}%</div>
        <div className="slide-line"></div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  ${({ percentage }) => css`
    width: 100%;
    margin-bottom: 21.3px;

    .task-slide-wrap {
      position: relative;

      .percentage {
        padding-left: calc(${percentage}% - 13px);
        transition: all 200ms;
        width: 100%;
        color: #b3d0ff;
        font-size: 12px;
        font-family: ${(props) => props.theme.plainBoldTextFont};
        margin-bottom: 7px;
      }

      .slide-line {
        position: relative;
        width: 100%;
        height: 4.3px;
        border-radius: 2.2px;
        background-color: #e1edff;

        &:before {
          content: '';
          display: block;
          position: absolute;
          width: ${percentage}%;
          border-radius: 2.2px 0 0 2.2px;
          height: 4.3px;
          background-color: ${Number(percentage) <= 33
            ? '#f27872'
            : Number(percentage) <= 66
            ? '#f9d953'
            : '#71af78'};
        }

        &:after {
          content: '';
          left: calc(${percentage}% - 5.65px);
          bottom: -4px;
          display: block;
          position: absolute;
          width: 11.3px;
          height: 11.3px;
          border-radius: 3px;
          background-color: ${Number(percentage) <= 33
            ? '#f27872'
            : Number(percentage) <= 66
            ? '#f9d953'
            : '#71af78'};
        }
      }
    }
  `}
`;
