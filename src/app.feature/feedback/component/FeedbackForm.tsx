import React from 'react';
import styled from 'styled-components';
import { useFormContext } from 'react-hook-form';

const FeedbackForm = () => {
  const { register } = useFormContext();

  return (
    <StyledWrapper
      {...register('content', { required: '의견을 입력해주세요.' })}
      className="feedback-content"
      placeholder="이글루에게 전하고 싶은 의견이 있나요?&#13;&#10;우측 상단에서 범주를 선택한 후 의견을 전해주세요!"
    />
  );
};

export default FeedbackForm;

const StyledWrapper = styled.textarea`
  width: 100%;
  height: calc(100% - 100px);
  padding: 24px;
  font-size: 21px;
  line-height: 32px;
  border: none;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
  border-radius: 10px;
  resize: none;
  margin: 35px 0px;
  font-family: 'JejuGothic';

  :focus {
    outline: none;
  }
`;
