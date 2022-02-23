import React from 'react';
import styled, { css } from 'styled-components';
import { useEntryContext } from 'pages/entry';

const PasswordRow = () => {
  const { roomType, roomInfo, roomPasswordInput, setRoomPasswordInput } =
    useEntryContext();

  if ('usePassword' in roomInfo && roomInfo.usePassword) {
    return (
      <StyledWrapper roomType={roomType}>
        <div className="password-title">비밀번호</div>
        <div className="entry-row-content">
          <input
            className="password-input"
            type="password"
            value={roomPasswordInput}
            onChange={(e) => {
              if (
                // TODO (bug?) 숫자 비밀번호 입력 제한 조건 설정시 0으로 시작이 안 됨.
                e.target.value === '' ||
                e.target.value === '0' ||
                (Number(e.target.value) && e.target.value.length <= 4)
              ) {
                setRoomPasswordInput(e.target.value);
              }
            }}
          />
        </div>
      </StyledWrapper>
    );
  } else {
    return null;
  }
};

export default PasswordRow;

const StyledWrapper = styled.div`
  ${({ roomType }) => css`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: fit-content;

    .password-title {
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

    .entry-row-content {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 60%;
      height: 40px;
    }

    .password-input {
      display: flex;
      justify-content: center;
      align-items: center;
      max-width: 70%;
      height: 40px;
      text-align: center;
      border: 3.5px solid var(--color-orange-000);
      border-radius: 8px;
      :focus {
        outline: none;
      }
    }
  `}
`;
