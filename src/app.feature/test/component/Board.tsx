import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { ReactSketchCanvas } from 'react-sketch-canvas';

const Board = ({ size, color }) => {
  const [eraseMode, setEraseMode] = useState(false);
  const [eraserSize, setEraserSize] = useState(5);

  const canvasRef = useRef(null);
  const styles = {
    border: '0.0625rem solid #9c9c9c',
    borderRadius: '0.25rem',
  };

  const handleEraserSize = (event) => {
    setEraserSize(event.target.value);
  };

  const handleEraseMode = () => {
    canvasRef.current.eraseMode(!eraseMode);
    setEraseMode(!eraseMode);
  };

  return (
    <StyledWrapper>
      <select value={size} onChange={handleEraserSize}>
        {[5, 10, 15, 20, 25, 30, 35].map((item, key) => (
          <option key={key}>{item}</option>
        ))}
      </select>
      <button onClick={handleEraseMode}>
        {eraseMode ? '그리기' : '지우개'}
      </button>
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
