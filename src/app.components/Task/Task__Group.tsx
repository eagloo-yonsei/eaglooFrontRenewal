import React, { useState } from 'react';
import styled from 'styled-components';
import TaskGroupEach from 'app.components/Task/Task__GroupEach';
import { faTrash, faFolder } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function TaskGroup({ taskOpen, tasks }) {
  const [groupOpen, setGroupOpen] = useState<boolean>(true);

  return (
    <Container taskOpen={taskOpen} groupOpen={groupOpen}>
      <div
        className="title"
        onClick={() => {
          setGroupOpen(!groupOpen);
        }}
      >
        <div className="group-name">
          <FontAwesomeIcon
            className="group-icon"
            icon={faFolder}
            onClick={() => {}}
          />
          <div className="group-text">이글루 팀플</div>
        </div>
        <div className="remove-group">
          <FontAwesomeIcon icon={faTrash} onClick={() => {}} />
        </div>
      </div>
      {groupOpen && (
        <>
          {tasks.map((task) => (
            <TaskGroupEach task={task} key={task.id} />
          ))}
        </>
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  border-radius: 13.1px;
  border: solid 2px #e1edff;
  font-family: ${(props) => props.theme.plainBoldTextFont};
  margin-bottom: 14.7px;
  padding: ${({ groupOpen }) => (groupOpen ? '12px' : '8px 12px')};
  background: ${({ groupOpen }) => (groupOpen ? '#e1edff' : 'white')};

  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16.8px;
    color: #ff7d5a;
    margin-bottom: ${({ groupOpen }) => (groupOpen ? '15.2px' : '0')};

    .group-name {
      display: flex;
      align-items: center;

      .group-icon {
        font-size: 25px;
        margin-right: 13.5px;
      }

      .group-text {
        &:hover {
          cursor: pointer;
        }
      }
    }

    .remove-group {
      color: #b3d0ff;

      &:hover {
        cursor: pointer;
      }
    }
  }
`;

const CheckBox = styled.div``;
