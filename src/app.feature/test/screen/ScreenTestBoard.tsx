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
        <span>브러쉬 설정</span>
        <input type="color" value={color} onChange={handleColor} />
        <select value={size} onChange={handleSize}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, key) => (
            <option key={key}>{item}</option>
          ))}
        </select>
      </div>
      <div className="eraser-picker">
        <span>지우개 설정</span>
        <select value={eraserSize} onChange={handleEraserSize}>
          {[5, 10, 15, 20, 25, 30, 35].map((item, key) => (
            <option key={key}>{item}</option>
          ))}
        </select>
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
    span {
      color: white;
    }
  }

  .eraser-picker {
    span {
      color: white;
    }
  }
`;
