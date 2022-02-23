import React, { useState } from 'react';
import styled from 'styled-components';
import { FormProvider, useForm } from 'react-hook-form';
import API from 'app.modules/api';
import FeedbackHeader from 'app.feature/feedback/component/FeedbackHeader';
import FeedbackForm from 'app.feature/feedback/component/FeedbackForm';
import FeedbackFooter from 'app.feature/feedback/component/FeedbackFooter';
import { useGetUser } from 'app.store/intoAPP/store.intoAPP';
import { FeedbackCategory } from 'app.feature/feedback/constant/FeedbackCategory';
import {
  toastErrorMessage,
  toastSuccessMessage,
} from 'app.modules/util/ToastMessage';

const ScreenFeedback = () => {
  const methods = useForm();
  const { handleSubmit, setValue } = methods;

  const getUser = useGetUser();
  const [submitting, setSubmitting] = useState<boolean>(false);

  const handleSubmitFeedback = async (formData) => {
    try {
      setSubmitting(true);
      const res = await API.POST({
        url: '/api/feedback',
        data: {
          email: getUser.info.email,
          ...formData,
        },
      });

      if (res.data.success) {
        setValue('category', FeedbackCategory.GENERAL);
        setValue('content', '');
        toastSuccessMessage(res.data.message);
      } else {
        return res;
      }
    } catch (err) {
      if (!err.data.message) {
        return toastErrorMessage('피드백 제출 중 오류가 발생했습니다.');
      }
      toastErrorMessage(err.data.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <StyledWrapper>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(handleSubmitFeedback)}>
          <FeedbackHeader />
          <FeedbackForm />
          <FeedbackFooter submitting={submitting} />
        </form>
      </FormProvider>
    </StyledWrapper>
  );
};

export default ScreenFeedback;

const StyledWrapper = styled.div`
  height: 100%;

  form {
    display: block;
    height: 100%;
  }
`;
