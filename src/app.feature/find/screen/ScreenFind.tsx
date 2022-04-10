import React, { useState } from 'react';
import styled from 'styled-components';
import FindId from 'app.feature/find/component/FindId';
import FindPw from 'app.feature/find/component/FindPw';
import { StylelessLink } from 'app.components/StyledComponents/StyledComponents';

const ScreenFind = () => {
  const [findMethod, setFindMethod] = useState('id');

  return (
    <StyledWrapper>
      <div className="eagloo-icon">
        <img src="/images/common/login-icon.png" alt="login icon" />
        <div className="eagloo-text">EAGLOO</div>
      </div>
      <div className="find-button-wrap">
        <div
          className={`find-button ${findMethod === 'id'}`}
          onClick={() => setFindMethod('id')}
        >
          아이디 찾기
        </div>
        <div
          className={`find-button ${findMethod === 'pw'}`}
          onClick={() => setFindMethod('pw')}
        >
          비밀번호 찾기
        </div>
      </div>
      <div className="find-method">
        {findMethod === 'id' && <FindId />}
        {findMethod === 'pw' && <FindPw />}
      </div>

      <div className="link-button-wrap">
        <StylelessLink to={`/login`}>로그인 화면으로 돌아가기</StylelessLink>
      </div>
    </StyledWrapper>
  );
};

export default ScreenFind;

const StyledWrapper = styled.div`
  color: ${(props) => props.theme.entryLightBlue};

  .eagloo-icon {
    margin-bottom: 50px;
    text-align: center;

    img {
      width: 130px;
      margin-bottom: 20px;
    }

    .eagloo-text {
      color: white;
      font-family: ${(props) => props.theme.subLabelFont};
      font-size: 40px;
    }
  }

  .find-button-wrap {
    display: flex;
    justify-content: center;
    gap: 10px;

    .find-button {
      cursor: pointer;
      color: #3563d8;
      font-family: ${(props) => props.theme.plainBoldTextFont};
      font-size: 22.5px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 170.3px;
      height: 37.8px;
      border-radius: 18.9px;
      background-color: #fff;
      transition: 200ms;

      &.false {
        opacity: 0.35;
      }
    }
  }

  .find-method {
    height: 320px;
  }

  .link-button-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.entryLightBlue};
    font-size: 16px;
    font-family: 'JejuGothic';
  }
`;
