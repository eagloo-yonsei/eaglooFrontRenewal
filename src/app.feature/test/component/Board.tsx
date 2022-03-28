import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { ReactSketchCanvas } from 'react-sketch-canvas';

const Board = ({ size, color, canvasRef, eraserSize }) => {
  const styles = {
    border: '0.0625rem solid #9c9c9c',
    borderRadius: '0.25rem',
  };

  return (
    <StyledWrapper>
      <ReactSketchCanvas
        ref={canvasRef}
        style={styles}
        width="100%"
        height="100%"
        eraserWidth={eraserSize}
        strokeWidth={size}
        strokeColor={color}
      />
    </StyledWrapper>
  );
};

export default Board;

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
