import React from 'react';
import styled from 'styled-components';
import LottieColorfulLoading from 'app.components/Lottie/LottieColorfulLoading';

const Button = ({
  className = 'styled-button',
  type = 'button',
  children,
  isLoading,
  ...props
}) => {
  return (
    <StyledButton className={className} type={type}>
      {children}
      {/*{isLoading ? <LottieColorfulLoading /> : children}*/}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button`
  cursor: pointer;
  width: 100%;
  height: 46px;
  color: var(--color-white);
  background: transparent
    linear-gradient(
      90deg,
      var(--color-orange-400) 9%,
      var(--color-orange-300) 32%,
      var(--color-orange-200) 69%,
      var(--color-orange-100) 98%
    )
    0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 19px var(--color-gray-200);
  border-radius: 8px;
  font-size: 22px;
  font-family: 'JejuGothic';
  position: relative;
  border: none;
  transition: 200ms;

  &:hover {
    opacity: 0.8;
  }

  .styled-lottie {
    position: absolute;
  }
`;
