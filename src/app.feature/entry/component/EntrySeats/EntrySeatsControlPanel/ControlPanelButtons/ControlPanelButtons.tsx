import React from 'react';
import styled from 'styled-components';
import TimeSelectorRow from './TimeSelectorRow';
import PasswordRow from './PasswordRow';
import EnterButton from './EnterButton';

const ControlPanelButtons = () => {
  return (
    <StyledWrapper>
      <TimeSelectorRow />
      <PasswordRow />
      <EnterButton />
    </StyledWrapper>
  );
};

export default ControlPanelButtons;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 48px;
  width: 50%;
  height: 92.5%;
  padding: 30px 0px;

  @media (max-width: 1300px) {
    padding: 15px 0px;
  }
`;
