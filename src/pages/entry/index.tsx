import React from 'react';
import styled from 'styled-components';
import ScreenEntry from 'app.feature/entry/screen/ScreenEntry';
import { fadeIn } from 'app.styled/keyframe';
import ScreenEntryProvider from 'app.feature/entry/screen/ScreenEntryProvider';
import { useGetUser } from 'app.store/intoAPP/store.intoAPP';
import { useRouter } from 'next/router';
import Loading from 'app.components/Loading/Loading';

const Page_Entry = () => {
  const { isLoading, info: userInfo } = useGetUser();
  const router = useRouter();

  if (isLoading) return <Loading />;
  if (userInfo?.isAdmin) router.push('/');
  return <Entry />;
};

const Entry = () => {
  return (
    <StyledWrapper>
      <ScreenEntryProvider>
        <ScreenEntry />
      </ScreenEntryProvider>
    </StyledWrapper>
  );
};

export default Page_Entry;

const StyledWrapper = styled.div`
  margin: 0 auto;
  overflow: hidden;
  width: 100%;
  height: 100%;
  animation: ${fadeIn} 500ms;
`;
