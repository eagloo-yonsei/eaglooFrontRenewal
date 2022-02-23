import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';

const ListRow = ({ roomType, roomList, handleEntryRoom }) => {
  return (
    <StyledWrapper>
      <div className={`room-list-title ${roomType}`}>
        <span className={`room-type ${roomType}`}>
          {roomType === 'PUBLIC' ? '기본 ' : '사용자 설정 '}
        </span>
        <span className={`room ${roomType}`}>스터디룸</span>
      </div>
      <div className="room-list-wrap">
        {roomList.map((room) => (
          <div
            className="room-list-item"
            key={room?.id}
            onClick={() => handleEntryRoom(roomType, room?.id)}
          >
            <div className="room-img">
              <img src="/images/common/icon-fat.png" />
            </div>
            <div className="room-title">{room?.roomName}</div>
            {room?.roomDescription && (
              <div className="room-desc">{room?.roomDescription}</div>
            )}
            <div className="room-user">
              <FontAwesomeIcon icon={faUserAlt} size="1x" />
              {room?.seats?.length}/14
            </div>
          </div>
        ))}
      </div>
    </StyledWrapper>
  );
};

export default ListRow;

const StyledWrapper = styled.div`
  .room-list-title {
    font-size: 28px;
    margin-bottom: 32px;
    font-family: NexonGothicLv1Bold;

    .room-type {
      &.PUBLIC {
        color: var(--color-main);
      }

      &.CUSTOM {
        color: var(--color-orange-400);
      }
    }

    .room {
      &.PUBLIC {
        color: var(--color-light-blue-200);
      }

      &.CUSTOM {
        color: var(--color-orange-000);
      }
    }
  }

  .room-list-wrap {
    margin-bottom: 70px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 10px;
    row-gap: 70px;

    .room-list-item {
      cursor: pointer;
      color: var(--color-main);
      font-family: NexonGothicLv1Bold;

      .room-img {
        margin-bottom: 12px;
        width: 100%;
        padding: 50%;
        position: relative;

        img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
        }
      }

      .room-title {
        font-size: 18px;
        text-align: center;
        margin-bottom: 12px;

        @media only screen and (max-width: 1300px) {
          font-size: 15px;
        }
      }

      .room-desc {
        font-size: 10px;
        margin-bottom: 15px;
      }

      .room-user {
        svg {
          width: 1em;
          margin-right: 5px;
        }

        text-align: center;
      }
    }
  }
`;
