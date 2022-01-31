import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm, FormProvider } from 'react-hook-form';
import LogoBox from 'app.components/LogoBox/LogoBox';
import SignUpForm from 'app.feature/signup/component/SignUpForm';
import API from 'app.modules/api';
import {
  toastErrorMessage,
  toastMailSendSuccessMessage,
} from 'app.modules/util/ToastMessage';

const ScreenSignUp = () => {
  const [isSending, setIsSending] = useState(false);
  const methods = useForm();

  const handleOnSubmit = async (formData) => {
    setIsSending(true);
    console.log(formData);
    const res = await API.POST({
      url: '/api/user',
      data: { email: formData?.email },
    });

    if (res?.data?.success) {
      toastMailSendSuccessMessage(formData?.email);
    } else {
      toastErrorMessage(res.data.message);
    }
    setIsSending(false);
  };

  return (
    <StyledWrapper>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(handleOnSubmit)}>
          <LogoBox />
          <SignUpForm isSending={isSending} />
        </form>
      </FormProvider>
    </StyledWrapper>
  );
};

export default ScreenSignUp;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  width: 300px;
  height: 100%;
`;
