import React from 'react';
import styled, { css } from 'styled-components';
import { useEntryContext } from 'pages/entry';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUnlock, faUserAlt } from '@fortawesome/free-solid-svg-icons';

const EntryHeader = () => {
  const { roomType, roomInfo } = useEntryContext();

  return (
    <StyledWrapper roomType={roomType}>
      <div className="title-icon">
        <FontAwesomeIcon
          icon={
            'usePassword' in roomInfo && roomInfo.usePassword
              ? faLock
              : faUnlock
          }
        />
      </div>
      <div className="title">{roomInfo.roomName}</div>
      <div className="sub-title">대기실</div>
      <div className="state-icon">
        <FontAwesomeIcon icon={faUserAlt} />
      </div>
      <div className="state-number">{roomInfo.seats.length} / 14</div>
    </StyledWrapper>
  );
};

export default EntryHeader;

const StyledWrapper = styled.div`
  ${({ roomType }) => css`
    display: flex;
    align-items: flex-end;
    width: 100%;
    height: 35px;
    margin-bottom: 40px;

    .title-icon {
      color: ${roomType === 'PUBLIC'
        ? 'var(--color-main)'
        : 'var(--color-orange-400)'};
      font-size: 28px;
      margin-right: 12px;
    }

    .title {
      color: ${roomType === 'PUBLIC'
        ? 'var(--color-main)'
        : 'var(--color-orange-400)'};
      font-size: 30px;
      margin-right: 12px;
    }

    .sub-title {
      color: ${roomType === 'PUBLIC'
        ? 'var(--color-light-blue-200)'
        : 'var(--color-orange-400)'};
      font-size: 26px;
      margin-right: 24px;
    }

    .state-icon {
      color: #c4c4c4;
      font-size: 20px;
      margin-right: 12px;
    }

    .state-number {
      color: #c4c4c4;
      font-size: 24px;
    }
  `}
`;
