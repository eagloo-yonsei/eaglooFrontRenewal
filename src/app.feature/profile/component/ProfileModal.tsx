import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'app.components/Modal/Modal';

const ProfileModal = ({
  nicknameInput,
  isVisible,
  handleClose,
  nicknameConfirm,
  nicknameChangeConfirmed,
  setNicknameChangeConfirmed,
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
                  <div className="info-title"></div>
                  <div className="info-input"></div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="password-confirm-body"></div>
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
