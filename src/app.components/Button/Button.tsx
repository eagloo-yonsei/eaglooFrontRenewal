import React from 'react';
import styled, { css } from 'styled-components';
import { CircularProgress } from '@material-ui/core';

const Button = ({
  className = 'styled-button',
  type = 'button',
  cssStyle = null,
  isLoading = false,
  disabled = false,
  block = false,
  ringSize = 30,
  fontSize = '22px',
  width = '100%',
  height = '46px',
  children,
  ...props
}) => {
  return (
    <StyledButton
      className={className}
      type={type}
      cssStyle={cssStyle}
      disabled={disabled || isLoading}
      width={width}
      height={height}
      fontSize={fontSize}
      {...props}
    >
      {isLoading ? (
        <CircularProgress color="inherit" size={ringSize} thickness={5} />
      ) : (
        children
      )}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button`
  ${({ disabled, block, cssStyle, width, height, fontSize }) => css`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 200ms;
    position: relative;
    border: none;
    width: ${width};
    height: ${height};
    line-height: ${height};
    text-align: center;
    color: var(--color-white);
    border-radius: 8px;
    background: ${disabled ? '#c4c4c4' : 'var(--color-orange-gradient)'};
    font-size: ${fontSize};
    font-family: 'JejuGothic';
    ${cssStyle};

    &:hover {
      opacity: ${disabled ? 1 : 0.7};
    }

    &:disabled {
      cursor: unset;
    }
  `}
`;
