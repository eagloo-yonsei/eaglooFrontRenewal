import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Input from 'app.components/Input/Input';
import Button from 'app.components/Button/Button';

type TProps = {
  isLoading: boolean;
};

const LoginForm: React.FC<TProps> = ({ isLoading }) => {
  return (
    <StyledWrapper>
      <div className="email-input-wrap">
        <Input name="email" type="text" placeholder="id" />
        <div className="email-placeholder">@yonsei.ac.kr</div>
      </div>
      <Input name="password" type="password" placeholder="password" />
      <Button type="submit" isLoading={isLoading}>
        로그인하기
      </Button>
      <div className="sign-up-button">
        <Link href="/signup">회원가입</Link>
      </div>
    </StyledWrapper>
  );
};

export default LoginForm;

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

  .styled-button {
    margin-bottom: 45px;
  }

  .sign-up-button {
    text-align: center;
    font-size: 16px;
    font-family: 'JejuGothic';

    a {
      color: var(--color-light-blue-100);
    }
  }
`;
