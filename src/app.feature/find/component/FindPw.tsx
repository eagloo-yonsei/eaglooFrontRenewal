import React, { useState } from 'react';
import styled from 'styled-components';
import { SubmitButton } from 'app.components/StyledComponents/StyledComponents';
import API from 'app.modules/api';
import {
  API_RESET_PASSWORD,
  API_SEND_RESET_MAIL,
} from 'app.modules/api/eagloo.find';
import { useStoreScheduler } from 'app.store/scheduler/store.scheduler';
import { useStorePasswordSecret } from 'app.store/passwordSecret/store.passwordSecret';
import { useRouter } from 'next/router';

const FindPw = () => {
  const [emailInput, setEmailInput] = useState<string>('');
  const [nameInput, setNameInput] = useState<string>('');
  const [secretInput, setSecretInput] = useState<string>('');
  const [passwordInput, setPasswordInput] = useState<string>('');
  const [passwordConfirmInput, setPasswordConfirmInput] = useState<string>('');
  const [sendEmail, setSendEmail] = useState<boolean>(false);

  const passwordSecret = useStorePasswordSecret(
    (state) => state.passwordSecret
  );
  const setPasswordSecret = useStorePasswordSecret(
    (state) => state.setPasswordSecret
  );

  const router = useRouter();

  const requestSendEmail = async () => {
    try {
      const res = await API.POST({
        url: API_SEND_RESET_MAIL,
        data: {
          email: emailInput,
        },
      });
      setPasswordSecret();
    } catch (err) {}
  };

  const resetPassword = async () => {
    try {
      const res = await API.POST({
        url: API_RESET_PASSWORD,
        data: {
          email: emailInput,
          givenSecret: secretInput,
          newPassword: passwordInput,
        },
      });
      router.push('/login');
    } catch (err) {}
  };
  return (
    <StyledWrapper>
      {passwordSecret ? (
        <>
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
              value={secretInput}
              placeholder="인증번호"
              onChange={(e) => setSecretInput(e.target.value)}
              onKeyPress={(e) => {
                // if (e.key === 'Enter') {
                //   signIn();
                // }
              }}
            />
            <input
              type="text"
              spellCheck="false"
              value={passwordInput}
              placeholder="새 비밀번호"
              onChange={(e) => setPasswordInput(e.target.value)}
              onKeyPress={(e) => {
                // if (e.key === 'Enter') {
                //   signIn();
                // }
              }}
            />
            <input
              type="text"
              spellCheck="false"
              value={passwordConfirmInput}
              placeholder="새 비밀번호 확인"
              onChange={(e) => setPasswordConfirmInput(e.target.value)}
              onKeyPress={(e) => {
                // if (e.key === 'Enter') {
                //   signIn();
                // }
              }}
            />
            <SubmitButton
              buttonContent={`비밀번호 변경하기`}
              loadingStatus={false}
              submitFunction={resetPassword}
            />
          </div>
        </>
      ) : (
        <>
          <div className="main-text">
            가입 시 아이디를 입력해주시면
            <br />
            이메일 주소를 통해 인증 메일을 보내드립니다.
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
            {/*<input*/}
            {/*  type="text"*/}
            {/*  spellCheck="false"*/}
            {/*  value={nameInput}*/}
            {/*  placeholder="실명입력"*/}
            {/*  onChange={(e) => setNameInput(e.target.value)}*/}
            {/*  onKeyPress={(e) => {*/}
            {/*    // if (e.key === 'Enter') {*/}
            {/*    //   signIn();*/}
            {/*    // }*/}
            {/*  }}*/}
            {/*/>*/}
            <SubmitButton
              buttonContent={`인증 메일 보내기`}
              loadingStatus={false}
              submitFunction={requestSendEmail}
            />
          </div>
        </>
      )}
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
