import React from 'react';
import styled from 'styled-components';
import Modal from 'app.components/Modal/Modal';
import {
  faAlignLeft,
  faBell,
  faClock,
  faHistory,
  faMapMarkerAlt,
  faPalette,
  faUser,
  faExclamation,
  faExclamationCircle,
  faExclamationTriangle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTaskContext } from 'app.components/Task/TaskProvider';
import TaskImportance from 'app.components/Task/Task__Importance';

const TaskModal = ({ ...props }) => {
  const {
    createTask,
    newTaskInputRef,
    setNewTaskInput,
    newTaskInput,
    handleTaskModalOpen,
  } = useTaskContext();

  const { newTaskImportance, selectNewTaskImportance } = useTaskContext();

  return (
    <StyledModal {...props} closable={true}>
      <input
        className="task-title"
        placeholder="일정제목을 입력해주세요."
        ref={newTaskInputRef}
        // disabled={
        //     !isLoggedIn || taskLoading || taskLoadingError || taskUploading
        // }
        type="text"
        spellCheck="false"
        value={newTaskInput}
        onChange={(e) => {
          if (e.target.value.length <= 30) {
            setNewTaskInput(e.target.value);
          }
        }}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            createTask();
            handleTaskModalOpen();
          }
        }}
      />
      <div className="task-clock">
        <FontAwesomeIcon icon={faClock} className="clock-icon" />
        <div className="clock-text">
          <div className="clock-date">
            2022년 1월 23일 (일) ~ 2022년 23일 (일)
          </div>
          <div className="clock-time">오전 12:00 ~ 오후 12:00</div>
        </div>
      </div>
      <div className="task-repeat">
        <FontAwesomeIcon icon={faHistory} className="repeat-icon" />
        <div className="repeat-text">
          <div className="repeat-day">
            {['월', '화', '수', '목', '금', '토', '일'].map((day, idx) => (
              <div className="day" key={idx}>
                {day}
              </div>
            ))}
            <div>마다</div>
          </div>
          <div className="repeat-date">2022년 1월 23일 (일) 까지 반복</div>
        </div>
      </div>

      <div className="task-content">
        <FontAwesomeIcon icon={faAlignLeft} className="content-icon" />
        <textarea placeholder="설명을 추가해주세요." />
      </div>
      <div className="task-alarm">
        <FontAwesomeIcon icon={faBell} className="alarm-icon" />
        <div className="alarm-text">알람설정</div>
      </div>
      <div className="task-color">
        <FontAwesomeIcon icon={faPalette} className="color-icon" />
        <div className="color-text">색상설정</div>
        <input type="color" className="color-input" />
      </div>
      <div className="task-importance">
        <FontAwesomeIcon
          icon={faExclamationTriangle}
          className="importance-icon"
        />
        <div className="importance-text">중요도설정</div>

        <TaskImportance
          importance={newTaskImportance}
          importanceSettingFunc={selectNewTaskImportance}
        />
      </div>
      <div
        className="save-button"
        onClick={() => {
          createTask();
          handleTaskModalOpen();
        }}
      >
        저장
      </div>
    </StyledModal>
  );
};

export default TaskModal;

const StyledModal = styled(Modal)`
  .modal-body {
    width: 523px;
    padding: 50px 40.5px 38px;
  }

  .task-title {
    width: 100%;
    height: 36.8px;
    margin-bottom: 23.7px;
    padding: 8px 16px;
    border-radius: 14.3px;
    border: none;
    background-color: #b3d0ff;
    color: white;
    font-size: 19px;
    font-family: ${(props) => props.theme.plainBoldTextFont};

    &::placeholder {
      color: white;
    }
  }

  .task-clock {
    display: flex;
    font-family: ${(props) => props.theme.plainBoldTextFont};
    margin-bottom: 18px;

    .clock-icon {
      color: #0043a5;
      font-size: 25px;
      margin-right: 18px;
    }

    .clock-text {
      .clock-date {
        margin-bottom: 8px;
        font-size: 17px;
        color: #1d74ff;
      }

      .clock-time {
        font-size: 15px;
        color: #b3d0ff;
      }
    }
  }

  .task-repeat {
    display: flex;
    font-family: ${(props) => props.theme.plainBoldTextFont};
    margin-bottom: 24.9px;

    .repeat-icon {
      color: #0043a5;
      font-size: 25px;
      margin-right: 18px;
    }

    .repeat-text {
      .repeat-day {
        margin-bottom: 11.5px;
        font-size: 16.5px;
        color: #b3d0ff;
        display: flex;
        align-items: center;

        .day {
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          color: white;
          width: 28px;
          height: 28px;
          margin-right: 8px;
          background-color: #b3d0ff;
        }
      }

      .repeat-date {
        font-size: 16.5px;
        color: #b3d0ff;
      }
    }
  }

  .task-user {
    display: flex;
    font-family: ${(props) => props.theme.plainBoldTextFont};
    margin-bottom: 19.2px;

    .user-icon {
      color: #0043a5;
      font-size: 25px;
      margin-right: 18px;
    }

    input {
      width: 100%;
      height: 29.8px;
      padding: 8px 16px;
      border-radius: 14.3px;
      border: none;
      background-color: #b3d0ff;
      color: white;
      font-size: 16.5px;
      font-family: ${(props) => props.theme.plainBoldTextFont};

      &::placeholder {
        color: white;
      }
    }
  }

  .task-location {
    display: flex;
    font-family: ${(props) => props.theme.plainBoldTextFont};
    margin-bottom: 19.2px;

    .location-icon {
      color: #0043a5;
      font-size: 25px;
      margin-right: 18px;
    }

    input {
      width: 100%;
      height: 29.8px;
      padding: 8px 16px;
      border-radius: 14.3px;
      border: none;
      background-color: #b3d0ff;
      color: white;
      font-size: 16.5px;
      font-family: ${(props) => props.theme.plainBoldTextFont};

      &::placeholder {
        color: white;
      }
    }
  }

  .task-content {
    display: flex;
    font-family: ${(props) => props.theme.plainBoldTextFont};
    margin-bottom: 23px;

    .content-icon {
      color: #0043a5;
      font-size: 25px;
      margin-right: 18px;
    }

    textarea {
      width: 100%;
      height: 81px;
      min-height: 81px;
      padding: 8px 16px;
      border-radius: 14.3px;
      border: none;
      background-color: #b3d0ff;
      color: white;
      font-size: 16.5px;
      font-family: ${(props) => props.theme.plainBoldTextFont};

      &::placeholder {
        color: white;
      }
    }
  }

  .task-alarm {
    display: flex;
    font-family: ${(props) => props.theme.plainBoldTextFont};
    margin-bottom: 23px;

    .alarm-icon {
      color: #0043a5;
      font-size: 25px;
      margin-right: 18px;
    }

    .alarm-text {
      font-size: 18px;
      color: #b3d0ff;
      display: flex;
      align-items: center;
    }
  }

  .task-color {
    display: flex;
    font-family: ${(props) => props.theme.plainBoldTextFont};
    margin-bottom: 23px;

    .color-icon {
      color: #0043a5;
      font-size: 25px;
      margin-right: 18px;
    }

    .color-text {
      font-size: 18px;
      color: #b3d0ff;
      display: flex;
      align-items: center;
      margin-right: 18px;
    }

    .color-input {
      border: none;
      color: white;
      padding: 0;
      background: 0;
    }
  }

  .task-importance {
    display: flex;
    align-items: center;
    font-family: ${(props) => props.theme.plainBoldTextFont};

    .importance-icon {
      color: #0043a5;
      font-size: 25px;
      margin-right: 18px;
    }

    .importance-text {
      font-size: 18px;
      color: #b3d0ff;
      display: flex;
      align-items: center;
      margin-right: 18px;
    }
  }

  .save-button {
    font-family: ${(props) => props.theme.plainBoldTextFont};
    position: absolute;
    right: 40.5px;
    bottom: 23.2px;
    width: 78px;
    height: 36.8px;
    border-radius: 14.3px;
    background-color: #ff7d5a;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;

    &:hover {
      cursor: pointer;
    }
  }
`;
