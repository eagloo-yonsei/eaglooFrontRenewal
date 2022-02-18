import React from 'react';
import styled from 'styled-components';
import Input from 'app.components/Input/Input';
import Button from 'app.components/Button/Button';

type TProps = {
  isSending: boolean;
};

const SignUpForm: React.FC<TProps> = ({ isSending }) => {
  return (
    <StyledWrapper>
      <div className="email-input-wrap">
        <Input name="email" type="text" placeholder="연세 메일 주소" />
        <div className="email-placeholder">@yonsei.ac.kr</div>
      </div>
      <Button type="submit" isLoading={isSending} fontSize="18px">
        인증메일 보내기
      </Button>
    </StyledWrapper>
  );
};

export default SignUpForm;

const StyledWrapper = styled.div`
  .styled-input {
    margin-bottom: 17.5px;
  }

  .email-input-wrap {
    position: relative;

    .email-placeholder {
      position: absolute;
      top: 15px;
      right: 12px;
      color: var(--color-gray-100);
      font-size: 18px;
      font-family: 'JejuGothic';
    }
  }
`;
