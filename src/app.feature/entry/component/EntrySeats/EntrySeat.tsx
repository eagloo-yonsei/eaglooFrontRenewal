import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TimerPerMinute from 'app.components/Timer/TimerPerMinute';
import { Seat } from 'app.modules/constant/interface';
import { useEntryContext } from 'pages/entry';

type TProps = {
  seatNo: number;
};

const EntrySeat: React.FC<TProps> = ({ seatNo }) => {
  const { roomInfo, selectedSeatNo, handleSelectSeat } = useEntryContext();
  const [occupiedSeatInfo, setOccupiedSeatInfo] = useState<Seat>({
    seatNo: 0,
    socketId: '',
    userEmail: '',
    endTime: 0,
    streamState: {
      video: false,
      audio: false,
    },
  });

  useEffect(() => {
    const matchedSeat = roomInfo.seats.find((seat) => {
      return seat.seatNo === seatNo;
    });
    if (matchedSeat) {
      setOccupiedSeatInfo(matchedSeat);
    }
  }, [roomInfo]);

  if (occupiedSeatInfo.seatNo !== 0)
    return (
      <StyledWrapper>
        <StyledOccupiedSeat seatNo={seatNo} occupiedSeatInfo={occupiedSeatInfo}>
          <div className="occupied-message">사용중</div>
          <div className="timer-container">
            <TimerPerMinute endTime={occupiedSeatInfo.endTime} />
          </div>
        </StyledOccupiedSeat>
      </StyledWrapper>
    );

  return (
    <StyledWrapper
      onClick={() => {
        handleSelectSeat(seatNo);
      }}
    >
      {seatNo === selectedSeatNo ? (
        <StyledSelectedSeat>
          <FontAwesomeIcon icon={faCheck} />
          <SeatNo seatNo={seatNo} />
        </StyledSelectedSeat>
      ) : (
        <StyledEmptySeat>
          <SeatNo seatNo={seatNo} />
        </StyledEmptySeat>
      )}
    </StyledWrapper>
  );
};

const SeatNo = ({ seatNo }) => {
  return (
    <>
      {seatNo < 10 ? (
        <SeatNoContainer>{`0${seatNo}`}</SeatNoContainer>
      ) : (
        <SeatNoContainer>{seatNo}</SeatNoContainer>
      )}
    </>
  );
};

export default EntrySeat;

const StyledWrapper = styled.div`
  width: 96%;
  height: 94%;
`;

const SeatContainer = styled.div`
  ${({ roomType }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
    width: 100%;
    height: 100%;
    font-size: 21px;
    border: 4.5px solid
      ${roomType === 'PUBLIC'
        ? 'var(--color-light-blue-200)'
        : 'var(--color-orange-400)'};
    border-radius: 8px;
    font-family: NexonGothicLv1Bold;
    overflow: hidden;

    @media (max-width: 1300px) {
      font-size: 16px;
    }
  `}
`;

const StyledOccupiedSeat = styled(SeatContainer)`
  display: flex;
  flex-direction: column;
  border: 4.5px solid #c4c4c4;
  background-color: #c4c4c4;
  color: white;
  letter-spacing: 5px;

  .occupied-message {
    font-size: 18px;
    @media (max-width: 1300px) {
      font-size: 12px;
    }
  }

  .timer-container {
    display: flex;
    width: 100%;
  }
`;

const StyledSelectedSeat = styled(SeatContainer)`
  ${({ roomType }) => css`
    color: white;
    font-size: 54px;
    background-color: ${roomType === 'PUBLIC'
      ? 'var(--color-light-blue-200)'
      : 'var(--color-orange-400)'};

    :hover {
      cursor: pointer;
    }

    @media (max-width: 1300px) {
      font-size: 32px;
    }
  `}
`;

const StyledEmptySeat = styled(SeatContainer)`
  ${({ roomType }) => css`
    background: none;
    color: ${roomType === 'PUBLIC'
      ? 'var(--color-light-blue-200)'
      : 'var(--color-orange-400)'};
    :hover {
      cursor: pointer;
    }
  `}
`;

const SeatNoContainer = styled.span`
  position: absolute;
  left: 8px;
  bottom: 8px;
  font-size: 16px;
  letter-spacing: 0px;

  @media (max-width: 1300px) {
    font-size: 12px;
  }
`;
