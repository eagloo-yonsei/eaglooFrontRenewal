import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { useRouter } from 'next/router';
import { FormProvider, useForm } from 'react-hook-form';
import API from 'app.modules/api';
import Button from 'app.components/Button/Button';
import ProfileForm from 'app.feature/profile/component/ProfileForm';
import ProfileModal from 'app.feature/profile/component/ProfileModal';
import {
  toastErrorMessage,
  toastSuccessMessage,
} from 'app.modules/util/ToastMessage';
import { useGetUser, useStoreIntoAPP } from 'app.store/intoAPP/store.intoAPP';
import { API_USER_INFO } from 'app.modules/api/eagloo.profile';
import SHA3 from 'sha3';

const ScreenProfile = () => {
  const getUser = useGetUser();
  const methods = useForm();
  const { watch } = methods;
  const updateAuthUser = useStoreIntoAPP((state) => state.updateAuthUser);

  const hashedNewPassword = new SHA3(512);
  const hashedPreviousPassword = new SHA3(512);

  const router = useRouter();
  const [isUpdating, setIsUpdating] = useState(false);
  const [nicknameChangeConfirmed, setNicknameChangeConfirmed] =
    useState<boolean>(!!getUser.info?.nickName);
  const [nicknameConfirm, setNicknameConfirm] = useState(false);
  const [passwordConfirm, setPasswordConfirm] = useState(true);
  const [passwordLength, setPasswordLength] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [previousPassword, setPreviousPassword] = useState('');

  const handleProfileEdit = async (formData) => {
    try {
      setIsUpdating(true);
      hashedNewPassword.reset();
      hashedNewPassword.update(watch()?.password);
      hashedPreviousPassword.reset();
      hashedPreviousPassword.update(previousPassword);
      console.log(formData);
      const res = await API.PUT({
        url: API_USER_INFO,
        data: {
          email: getUser?.info?.email,
          nickName: watch()?.nickNameInput
            ? watch()?.nickNameInput
            : getUser?.info?.nickName,
          newPassword: watch()?.password
            ? hashedNewPassword.digest('hex')
            : undefined,
          previousPassword: hashedPreviousPassword.digest('hex'),
        },
      });
      if (res.data.success) {
        updateAuthUser({
          nickName: watch()?.nickNameInput
            ? watch()?.nickNameInput
            : getUser?.info?.nickName,
        });
        toastSuccessMessage(res.data.message);
      } else {
        toastErrorMessage(res.data.message);
      }
    } catch (err) {
      console.log(err);
      toastErrorMessage('닉네임 중복 확인 중 오류가 발생했어요');
    } finally {
      handleClose();
      setIsUpdating(false);
    }
  };

  const handleClose = () => {
    setIsVisible(!isVisible);
  };

  return (
    <StyledWrapper>
      <ProfileModal
        previousPassword={previousPassword}
        setPreviousPassword={setPreviousPassword}
        passwordInput={watch()?.password}
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
            previousPassword={previousPassword}
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
              isLoading={isUpdating}
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
`;
