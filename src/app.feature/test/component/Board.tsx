import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { ReactSketchCanvas } from 'react-sketch-canvas';

const Board = ({ size, color, canvasRef, eraserSize }) => {
  const styles = {
    border: '0.0625rem solid black',
    borderRadius: '0.25rem',
  };

  return (
    <StyledWrapper>
      <ReactSketchCanvas
        canvasColor="black"
        ref={canvasRef}
        style={styles}
        width="100%"
        height="100%"
        eraserWidth={eraserSize}
        strokeWidth={size}
        strokeColor="white"
      />
    </StyledWrapper>
  );
};

export default Board;

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
