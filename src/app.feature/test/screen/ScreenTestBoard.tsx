import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Board from 'app.feature/test/component/Board';

const ScreenTestBoard = () => {
  const [color, setColor] = useState('#000000');
  const [size, setSize] = useState(5);

  const handleColor = (event) => {
    setColor(event.target.value);
  };

  const handleSize = (event) => {
    setSize(event.target.value);
  };

  return (
    <StyledWrapper>
      <div className="color-picker">
        <input type="color" value={color} onChange={handleColor} />
        <select value={size} onChange={handleSize}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, key) => (
            <option key={key}>{item}</option>
          ))}
        </select>
      </div>
      <Board color={color} size={size} />
    </StyledWrapper>
  );
};

export default ScreenTestBoard;

const StyledWrapper = styled.div`
  height: 100%;
  width: 100%;
`;
