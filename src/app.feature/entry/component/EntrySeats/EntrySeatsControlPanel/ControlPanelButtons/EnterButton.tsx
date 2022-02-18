import React from 'react';
import styled from 'styled-components';
import { useEntryContext } from 'pages/entry';

const EnterButton = () => {
  const {
    roomInfo,
    roomPasswordInput,
    selectedSeatNo,
    camAccepted,
    handleCheckVacancy,
    handleEnterRoom,
  } = useEntryContext();

  if (
    ('usePassword' in roomInfo &&
      roomInfo.usePassword &&
      roomPasswordInput.length !== 4) ||
    selectedSeatNo === 0 ||
    !camAccepted
  ) {
    return <StyledEnabledButton>참여하기</StyledEnabledButton>;
  } else {
    return (
      <StyledDisabledButton
        onClick={async function () {
          if (await handleCheckVacancy()) {
            handleEnterRoom();
          }
        }}
      >
        참여하기
      </StyledDisabledButton>
    );
  }
};

export default EnterButton;

const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 45px;
  color: white;
  font-size: 24px;
  font-family: SamlipHopang;
  border-radius: 15px;
  @media (max-width: 1300px) {
    width: 100px;
    height: 40px;
    font-size: 18px;
    border-radius: 8px;
  }
`;

const StyledEnabledButton = styled(StyledButton)`
  background: var(--color-orange-gradient);
  cursor: pointer;
`;

const StyledDisabledButton = styled(StyledButton)`
  background-color: #c4c4c4;
`;
