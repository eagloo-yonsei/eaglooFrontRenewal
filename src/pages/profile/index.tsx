import React from 'react';
import styled from 'styled-components';
import { fadeIn } from 'app.styled/keyframe';
import ScreenProfile from 'app.feature/profile/screen/ScreenProfile';
import { useGetUser } from 'app.store/intoAPP/store.intoAPP';
import ScreenProfileProvider from 'app.feature/profile/screen/ScreenProfileProvider';
import Loading from 'app.components/Loading/Loading';
import { useRouter } from 'next/router';

const Page_Profile = () => {
  const { isLoading, info: userInfo } = useGetUser();
  const router = useRouter();

  if (isLoading) return <Loading />;
  if (userInfo?.isAdmin) router.push('/');

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
  margin: 0 auto;
  overflow: hidden;
  width: 100%;
  height: 100%;
  animation: ${fadeIn} 500ms;
`;
