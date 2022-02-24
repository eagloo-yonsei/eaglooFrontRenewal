import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import API from 'app.modules/api';
import { toastErrorMessage } from 'app.modules/util/ToastMessage';
import styled, { css } from 'styled-components';
import { API_USER_NICKNAME } from 'app.modules/api/eagloo.profile';
import Button from 'app.components/Button/Button';

const ProfileForm = ({
  nicknameConfirm,
  setNicknameConfirm,
  passwordConfirm,
  setPasswordConfirm,
  passwordLength,
  setPasswordLength,
  previousPassword,
}) => {
  const { handleSubmit, register, watch, getValues } = useFormContext();
  const [confirming, setConfirming] = useState(false);

  const handleNicknameConfirm = async () => {
    try {
      setConfirming(true);
      const nickNameInput = getValues().nickname;
      console.log(nickNameInput);
      if (nickNameInput.length < 3) {
        return;
      }

      const res = await API.GET({
        url: API_USER_NICKNAME(nickNameInput),
        data: {},
      });

      if (res.data.success) {
        setNicknameConfirm(true);
      } else {
        toastErrorMessage(res.data.message);
      }
    } catch (err) {
      console.log(err);
      toastErrorMessage('닉네임 중복 확인 중 오류가 발생했어요');
    } finally {
      setConfirming(false);
    }
  };

  return (
    <StyledWrapper>
      <div className="profile-table">
        <div className="profile-item-wrap">
          <div className="item-title">닉네임</div>
          <div className="item-input">
            <input
              {...register('nickname')}
              placeholder="닉네임 (3자 이상)"
              spellCheck="false"
              onChange={() => setNicknameConfirm(false)}
            />
          </div>
          <Button
            disabled={nicknameConfirm}
            isLoading={confirming}
            className="item-button"
            onClick={handleNicknameConfirm}
          >
            중복 확인
          </Button>
          {nicknameConfirm ? (
            <div className="item-info ok">사용 가능한 닉네임입니다</div>
          ) : (
            <div className="item-info warn">닉네임 중복을 확인해주세요</div>
          )}
        </div>
        <div className="profile-item-wrap">
          <div className="item-title">실명</div>
          <div className="item-value">null</div>
        </div>
        <div className="profile-item-wrap">
          <div className="item-title">비밀번호 변경</div>
          <div className="item-input">
            <input
              {...register('password')}
              placeholder="새로운 비밀번호"
              type="password"
              onChange={(e) => {
                if (!!watch().passwordConfirm.length)
                  if (e.target.value !== watch().password)
                    setPasswordConfirm(false);
                  else setPasswordConfirm(true);
              }}
            />
          </div>
        </div>
        <div className="profile-item-wrap">
          <div className="item-title">비밀번호 변경 확인</div>
          <div className="item-input">
            <input
              {...register('passwordConfirm')}
              placeholder="새로운 비밀번호 확인"
              type="password"
              onChange={(e) => {
                if (e.target.value !== watch().password)
                  setPasswordConfirm(false);
                else setPasswordConfirm(true);

                if (e.target.value.length >= 8) setPasswordLength(true);
                else setPasswordLength(false);
              }}
            />
          </div>
          <div className="item-info-wrap">
            {!passwordConfirm && (
              <div className="item-info warn">
                비밀번호가 일치하지 않습니다.
              </div>
            )}
            {!passwordLength && (
              <div className="item-info warn">
                비밀번호는 8자리 이상이어야 합니다.
              </div>
            )}
            {watch()?.password === previousPassword && (
              <div className="item-info warn">
                이전 비밀번호와 다르게 설정해주세요.
              </div>
            )}
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default ProfileForm;

const StyledWrapper = styled.div`
  max-width: 620px;
  margin: 0 auto 30px;
  .profile-table {
    .profile-item-wrap {
      display: flex;
      height: 46px;
      margin-bottom: 20px;

      .item-title {
        line-height: 46px;
        align-items: center;
        width: 160px;
        min-width: 160px;
        height: 100%;
        font-size: 18px;
        font-family: NexonGothicLv1Bold;
      }

      .item-input {
        height: 100%;
        margin-right: 20px;

        input {
          width: 200px;
          height: 100%;
          font-size: 15px;
          font-family: JejuGothic;
          text-align: center;
          border: 2px solid gray;
          border-radius: 8px;
          padding: 0px 12px;

          :focus {
            outline: none;
          }

          ::placeholder {
            color: gray;
            font-family: 'JejuGothic';
          }
        }

        input[type='password'] {
          color: black;
          font-family: 'SansSerif';
        }
      }

      .item-value {
        height: 46px;
        display: flex;
        width: 200px;
        align-items: center;
        justify-content: center;
        font-size: 21px;
        font-family: JejuGothic;
      }

      .item-button {
        align-self: center;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80px;
        height: 32px;
        color: white;
        font-size: 12px;
        font-family: JejuGothic;
        border-radius: 8px;
        margin-right: 12px;
      }

      .item-info-wrap {
        height: 46px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 2px;
      }

      .item-info {
        display: flex;
        align-items: center;
        font-size: 12px;
        font-family: JejuGothic;

        &.ok {
          color: green;
        }

        &.warn {
          color: orangered;
        }
      }
    }
  }
`;
