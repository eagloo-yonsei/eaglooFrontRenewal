import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Board from 'app.feature/test/component/Board';

const ScreenTestBoard = () => {
  const [eraseMode, setEraseMode] = useState(false);
  const [eraserSize, setEraserSize] = useState(5);
  const [color, setColor] = useState('#000000');
  const [size, setSize] = useState(5);
  const canvasRef = useRef(null);

  const handleEraserSize = (event) => {
    setEraserSize(event.target.value);
  };

  const handleEraseMode = () => {
    canvasRef.current.eraseMode(!eraseMode);
    setEraseMode(!eraseMode);
  };
  const handleColor = (event) => {
    setColor(event.target.value);
  };

  const handleSize = (event) => {
    setSize(event.target.value);
  };

  return (
    <StyledWrapper>
      <div className="brush-picker">
        <label htmlFor="brush-size">브러쉬 설정 {size}/100</label>
        <input
          id="brush-size"
          value={size}
          type="range"
          min={1}
          max={100}
          onChange={handleSize}
        />
        <input type="color" value={color} onChange={handleColor} />
      </div>
      <div className="eraser-picker">
        <label htmlFor="eraser-size">지우개 설정 {eraserSize}/1000</label>
        <input
          id="eraser-size"
          value={eraserSize}
          type="range"
          min={1}
          max={1000}
          onChange={handleEraserSize}
        />
        <button onClick={handleEraseMode}>
          {eraseMode ? '그리기' : '지우개'}
        </button>
      </div>
      <Board
        color={color}
        size={size}
        canvasRef={canvasRef}
        eraserSize={eraserSize}
      />
    </StyledWrapper>
  );
};

export default ScreenTestBoard;

const StyledWrapper = styled.div`
  height: 100%;
  width: 100%;

  .brush-picker {
    label {
      color: white;
    }
  }

  .eraser-picker {
    label {
      color: white;
    }
  }
`;
