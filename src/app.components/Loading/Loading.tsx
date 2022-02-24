import React from 'react';
import { CircularProgress } from '@material-ui/core';
import styled from 'styled-components';

const Loading = () => {
  return (
    <StyledWrapper>
      <CircularProgress />
    </StyledWrapper>
  );
};

export default Loading;

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
