import React from 'react';
import styled, { css } from 'styled-components';
import { useEntryContext } from 'pages/entry';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';

const TimeSelectorRow = () => {
  const {
    roomType,
    timeToStudy,
    handleDecreaseTimeToStudy,
    handleIncreaseTimeToStudy,
  } = useEntryContext();

  return (
    <StyledWrapper roomType={roomType}>
      <div className="time-selector-title">시간선택</div>
      <div className="time-selector">
        <div className="arrow-icon" onClick={() => handleDecreaseTimeToStudy()}>
          <FontAwesomeIcon icon={faCaretLeft} />
        </div>
        <div className="selected-time">{timeToStudy} H</div>
        <div className="arrow-icon" onClick={() => handleIncreaseTimeToStudy()}>
          <FontAwesomeIcon icon={faCaretRight} />
        </div>
      </div>
    </StyledWrapper>
  );
};

export default TimeSelectorRow;

const StyledWrapper = styled.div`
  ${({ roomType }) => css`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: fit-content;

    .time-selector-title {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40%;
      /* min-width: 90px; */
      height: 40px;
      color: ${roomType === 'PUBLIC'
        ? 'var(--color-light-blue-200)'
        : 'var(--color-orange-400)'};
      font-size: 24px;
      font-family: 'NexonGothicLv1Bold';

      @media (max-width: 1300px) {
        font-size: 18px;
      }
    }

    .time-selector {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 60%;
      /* min-width: 160px; */
      height: 40px;
      gap: 10px;

      .selected-time {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 90px;
        font-size: 22px;
        font-family: NexonGothicLv1Bold;
      }

      .arrow-icon {
        color: ${roomType === 'PUBLIC' ? '#B7C8ED' : '#F15A24'};
        font-size: 40px;
        cursor: pointer;
      }
    }
  `}
`;
