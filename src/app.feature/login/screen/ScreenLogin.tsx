import React, { useState } from 'react';
import styled from 'styled-components';
import { FormProvider, useForm } from 'react-hook-form';
import { SHA3 } from 'sha3';
import LogoBox from 'app.components/LogoBox/LogoBox';
import LoginForm from 'app.feature/login/component/LoginForm';
import API from 'app.modules/api';
import { destroyCookie, setCookie } from 'nookies';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import {
  toastErrorMessage,
  toastLoginSuccessMessage,
} from 'app.modules/util/ToastMessage';
import { useStoreIntoAPP } from 'app.store/intoAPP/store.intoAPP';

const _eagloo_login = '_eagloo_login';
const _eagloo_user_info = '_eagloo_user_info';

const ScreenLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const methods = useForm();
  const router = useRouter();
  const hashedPassword = new SHA3(512);
  const requestAuthUser = useStoreIntoAPP((state) => state.requestAuthUser);

  const handleOnSubmit = async (formData) => {
    if (!formData.email || !formData.password)
      return toastErrorMessage('아이디와 비밀번호를 입력해주세요!');

    setIsLoading(true);
    hashedPassword.reset();
    hashedPassword.update(formData.password);

    const res = await API.GET({
      url: `/api/user/auth/${formData?.email}/${hashedPassword.digest('hex')}`,
      data: {},
    });

    if (res?.data?.success) {
      setCookie(null, _eagloo_login, 'true');
      setCookie(null, _eagloo_user_info, JSON.stringify(res?.data?.user));
      toastLoginSuccessMessage(res?.data?.user?.email);
      await requestAuthUser();
      router.push('/', null, { shallow: true });
    } else {
      setCookie(null, _eagloo_login, 'false');
      destroyCookie(null, _eagloo_user_info, null);
      toastErrorMessage(res?.data?.message);
    }
  };

  return (
    <StyledWrapper>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(handleOnSubmit)}>
          <LogoBox />
          <LoginForm isLoading={isLoading} />
        </form>
      </FormProvider>
    </StyledWrapper>
  );
};

export default ScreenLogin;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  width: 380px;
  height: 100%;
`;
