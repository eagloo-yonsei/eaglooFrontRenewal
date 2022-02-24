import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'app.components/Modal/Modal';

const ProfileModal = ({
  nicknameInput,
  passwordInput,
  isVisible,
  handleClose,
  nicknameConfirm,
  nicknameChangeConfirmed,
  setNicknameChangeConfirmed,
  previousPassword,
  setPreviousPassword,
}) => {
  const [isUpdating, setIsUpdating] = useState(false);

  const handleConfirm = (onClose) => {
    if (nicknameChangeConfirmed) {
      try {
        setIsUpdating(true);
        onClose();
      } catch (error) {
      } finally {
        setIsUpdating(false);
      }
    } else {
      setNicknameChangeConfirmed(true);
    }
  };

  return (
    <StyledModalWrapper
      id="profile-modal"
      open={isVisible}
      onClose={handleClose}
      onConfirm={handleConfirm}
      isFooter
    >
      <div className="profile-modal-wrapper">
        {nicknameConfirm && !nicknameChangeConfirmed ? (
          <div className="nickname-confirm-body">
            <div className="confirm-header">닉네임은 변경할 수 없습니다</div>
            <div className="confirm-body">
              {nicknameConfirm && (
                <div className="info-wrap">
                  <div className="info-title">닉네임</div>
                  <div className="info-input">{nicknameInput}</div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="password-confirm-body">
            <div className="confirm-header">비밀번호 확인</div>
            <div className="confirm-body">
              <input
                className="password-box"
                disabled={isUpdating}
                type="password"
                value={previousPassword}
                placeholder="현재 비밀번호"
                onChange={(e) => {
                  if (e.target.value.length <= 30) {
                    setPreviousPassword(e.target.value);
                  }
                }}
              />
            </div>
          </div>
        )}
        <div className="confirm-footer">
          <div className="confirm-message">
            {nicknameChangeConfirmed
              ? `현재 비밀번호를 입력해주세요`
              : `정보를 업데이트 할까요?`}
          </div>
        </div>
      </div>
    </StyledModalWrapper>
  );
};

export default ProfileModal;

const StyledModalWrapper = styled(Modal)`
  .modal-body {
    padding: 35px 60px;
  }

  .profile-modal-wrapper {
    padding: 35px 60px;
    width: max(540px, 40%);
    max-width: 640px;
    height: max(320px, 40%);
    max-height: 520px;

    .confirm-header {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 40px;
      font-family: RecipeKorea;
      font-size: 21px;
    }

    .confirm-body {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 25px;
      width: 100%;
      height: fit-content;

      .info-wrap {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 400px;
        height: 50px;
        gap: 25px;

        .info-title {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 15%;
          height: 100%;
          font-size: 16px;
          font-family: NexonGothicLv1Bold;
        }

        .info-input {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          font-family: NexonGothicLv1Bold;
          width: 50%;
          font-size: 28px;
        }
      }

      .password-box {
        width: 400px;
        height: 50px;
        font-size: 15px;
        text-align: center;
        border: 2px solid gray;
        border-radius: 8px;
        padding: 0 12px;
        :focus {
          outline: none;
        }
        ::placeholder {
          color: gray;
          font-family: JejuGothic;
        }
      }
    }

    .confirm-footer {
      display: flex;
      align-items: center;
      width: 100%;
      font-family: RecipeKorea;
      font-size: 21px;
      justify-content: space-between;
      height: fit-content;

      .confirm-message {
        display: flex;
        justify-content: center;
        align-items: center;
        color: orange;
        font-size: 15px;
        font-family: NexonGothicLv1Bold;
      }
    }
  }
`;
