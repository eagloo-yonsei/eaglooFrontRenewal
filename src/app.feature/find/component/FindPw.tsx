import React, { useState } from 'react';
import styled from 'styled-components';
import {
  StylelessLink,
  SubmitButton,
} from 'app.components/StyledComponents/StyledComponents';

const FindPw = () => {
  const [emailInput, setEmailInput] = useState<string>('');
  const [nameInput, setNameInput] = useState<string>('');

  return (
    <StyledWrapper>
      <div className="main-text">
        비밀번호는 아이디와 실명을 입력하면 <br />
        이메일 주소를 통해 임시 비밀번호를 발급해드립니다.
      </div>
      <div className="find-wrap">
        <div className="email-box-container">
          <input
            // ref={emailInputRef}
            // disabled={signingIn}
            type="text"
            spellCheck="false"
            value={emailInput}
            placeholder="id"
            onChange={(e) => setEmailInput(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                // signIn();
              }
            }}
          />
          <div className="email-placeholder">{`@yonsei.ac.kr`}</div>
        </div>
        <input
          type="text"
          spellCheck="false"
          value={nameInput}
          placeholder="실명입력"
          onChange={(e) => setNameInput(e.target.value)}
          onKeyPress={(e) => {
            // if (e.key === 'Enter') {
            //   signIn();
            // }
          }}
        />
        <SubmitButton
          buttonContent={`비밀번호 찾기`}
          loadingStatus={false}
          submitFunction={() => {
            console.log('dd');
          }}
        />
      </div>
    </StyledWrapper>
  );
};

export default FindPw;

const StyledWrapper = styled.div`
  color: ${(props) => props.theme.entryLightBlue};
  text-align: center;
  display: flex;
  height: 100%;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  .main-text {
    color: white;
    text-align: center;
    line-height: 25px;
    font-size: 18px;
    font-family: ${(props) => props.theme.subLabelFont};
    margin-bottom: 48.5px;
  }

  .find-wrap {
    margin: 0 auto;
    width: 337.5px;
  }

  input {
    width: 100%;
    height: 46px;
    font-size: 18px;
    padding: 0 12px;
    margin-bottom: 15px;
    border: none;
    border-radius: 8px;
    font-family: ${(props) => props.theme.subLabelFont};

    :focus {
      outline: none;
    }
    ::placeholder {
      color: ${(props) => props.theme.placeholder};
    }
  }

  .email-box-container {
    position: relative;
    width: 100%;
  }

  .email-placeholder {
    position: absolute;
    top: 15px;
    right: 12px;
    color: ${(props) => props.theme.mailPlaceholder};
    font-size: 18px;
    font-family: ${(props) => props.theme.subLabelFont};
  }
`;
