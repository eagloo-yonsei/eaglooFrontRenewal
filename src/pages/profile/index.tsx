import React from 'react';
import styled from 'styled-components';
import { fadeIn } from 'app.styled/keyframe';
import ScreenProfile from 'app.feature/profile/screen/ScreenProfile';
import { useGetUser } from 'app.store/intoAPP/store.intoAPP';
import ScreenProfileProvider from 'app.feature/profile/screen/ScreenProfileProvider';
import Loading from 'app.components/Loading/Loading';

const Page_Profile = () => {
  const { isLoading, info: userInfo } = useGetUser();

  if (isLoading) return <Loading />;
  return (
    <StyledWrapper>
      <ScreenProfileProvider userInfo={userInfo}>
        <ScreenProfile userInfo={userInfo} />
      </ScreenProfileProvider>
    </StyledWrapper>
  );
};

export default Page_Profile;

const StyledWrapper = styled.div`
  padding: 80px 100px 40px;
  border-radius: 35px 35px 0 0;
  margin: 0 auto;
  overflow: hidden;
  width: 80%;
  height: 100%;
  background-color: var(--color-white);
  animation: ${fadeIn} 500ms;
`;
