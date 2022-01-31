import React from 'react';
import styled from 'styled-components';
import { useFormContext } from 'react-hook-form';

const Input = ({ name, className = 'styled-input', ...props }) => {
  const { register } = useFormContext();

  return <StyledInput {...register(name)} className={className} {...props} />;
};

export default Input;

const StyledInput = styled.input`
  display: block;
  position: relative;
  width: 100%;
  height: 46px;
  border-radius: 8px;
  background-color: var(--color-white);
  box-shadow: 0px 0px 19px var(--color-gray-200);
  border: none;
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
  padding: 0 12px;
  margin-bottom: 15px;

  :focus {
    outline: none;
  }

  ::placeholder {
    color: #8fbdff;
    font-family: JejuGothic;
  }
`;
