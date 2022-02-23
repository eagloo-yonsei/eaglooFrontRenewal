import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { useRouter } from 'next/router';
import { FormProvider, useForm } from 'react-hook-form';
import API from 'app.modules/api';
import Button from 'app.components/Button/Button';
import ProfileForm from 'app.feature/profile/component/ProfileForm';
import ProfileModal from 'app.feature/profile/component/ProfileModal';
import { toastErrorMessage } from 'app.modules/util/ToastMessage';
import { useGetUser } from 'app.store/intoAPP/store.intoAPP';

const ScreenProfile = () => {
  const getUser = useGetUser();
  const methods = useForm();
  const { watch } = methods;

  const router = useRouter();
  const [nicknameChangeConfirmed, setNicknameChangeConfirmed] =
    useState<boolean>(getUser.info?.nickName ? true : false);
  const [nicknameConfirm, setNicknameConfirm] = useState(false);
  const [passwordConfirm, setPasswordConfirm] = useState(true);
  const [passwordLength, setPasswordLength] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const handleProfileEdit = async (formData) => {
    console.log(formData);
    handleClose();
  };

  const handleClose = () => {
    setIsVisible(!isVisible);
  };

  return (
    <StyledWrapper>
      <ProfileModal
        nicknameInput={watch()?.nickname}
        isVisible={isVisible}
        handleClose={handleClose}
        nicknameConfirm={nicknameConfirm}
        nicknameChangeConfirmed={nicknameChangeConfirmed}
        setNicknameChangeConfirmed={setNicknameChangeConfirmed}
      />
      <div className="profile-title">내 정보 관리</div>
      <FormProvider {...methods}>
        <form>
          <ProfileForm
            nicknameConfirm={nicknameConfirm}
            setNicknameConfirm={setNicknameConfirm}
            passwordConfirm={passwordConfirm}
            setPasswordConfirm={setPasswordConfirm}
            passwordLength={passwordLength}
            setPasswordLength={setPasswordLength}
          />
          <div className="profile-form-button">
            <Button
              className="cancel-button"
              onClick={() => router.back()}
              cssStyle={css`
                background: none;
                font-family: JejuGothic;
                color: var(--color-blue-000);
                border: 2px solid var(--color-blue-000);
              `}
            >
              취소
            </Button>
            <Button
              className="submit-button"
              onClick={methods.handleSubmit(handleProfileEdit)}
            >
              정보 변경
            </Button>
          </div>
        </form>
      </FormProvider>
    </StyledWrapper>
  );
};

export default ScreenProfile;

const StyledWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;

  .profile-title {
    font-size: 30px;
    font-family: RecipeKorea;
    margin-bottom: 30px;
  }

  .profile-form-button {
    display: flex;
    align-items: center;
    justify-content: end;

    .cancel-button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 120px;
      height: 46px;
      font-size: 18px;
      font-family: JejuGothic;
      color: var(--color-blue-000);
      border: 2px solid var(--color-blue-000);
      border-radius: 8px;
      cursor: pointer;
      margin-right: 10px;
    }
    
    .submit-button {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 120px;
      height: 46px;
      color: white;
      font-size: 18px;
      font-family: JejuGothic;
      border-radius: 8px;
      background: var(--color-orange-gradient);
    }
    }
  }
`;
