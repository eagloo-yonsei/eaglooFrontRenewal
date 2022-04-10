import { fadeIn } from 'app.styled/keyframe';
import React from 'react';
import styled from 'styled-components';
import ScreenFeedback from 'app.feature/feedback/screen/ScreenFeedback';
import { useGetUser } from 'app.store/intoAPP/store.intoAPP';
import ScreenFeedbackProvider from 'app.feature/feedback/screen/ScreenFeedbackProvider';
import Loading from 'app.components/Loading/Loading';
import ScreenAdminFeedbackProvider from '../../app.admin/feedback/screen/ScreenAdminFeedbackProvider';
import ScreenAdminFeedback from '../../app.admin/feedback/screen/ScreenAdminFeedback';

const Page_Feedback = () => {
  const getUser = useGetUser();
  const { isLoading, login, info: userInfo } = getUser;

  if (isLoading) return <Loading />;
  if (login && userInfo.isAdmin)
    return (
      <>
        <ScreenAdminFeedbackProvider>
          <ScreenAdminFeedback />
        </ScreenAdminFeedbackProvider>
      </>
    );
  return (
    <StyledWrapper>
      <ScreenFeedbackProvider userInfo={userInfo}>
        <ScreenFeedback userInfo={userInfo} />
      </ScreenFeedbackProvider>
    </StyledWrapper>
  );
};

export default Page_Feedback;

const StyledWrapper = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  font-family: 'JejuGothic';
  margin: 0 auto;
  overflow: hidden;
  width: 80%;
  height: 100%;
  animation: ${fadeIn} 500ms;
`;
