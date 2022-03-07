import React from 'react';
import styled from 'styled-components';
import ScreenList from 'app.feature/list/screen/ScreenList';
import { fadeIn } from 'app.styled/keyframe';
import { useGetUser } from 'app.store/intoAPP/store.intoAPP';
import { useRouter } from 'next/router';
import Loading from 'app.components/Loading/Loading';

const Page_List = () => {
  const { isLoading, info: userInfo } = useGetUser();
  const router = useRouter();

  if (isLoading) return <Loading />;
  if (userInfo?.isAdmin) router.push('/');
  return (
    <StyledWrapper>
      <ScreenList />
    </StyledWrapper>
  );
};

export default Page_List;

const StyledWrapper = styled.div`
  padding: 35px 70px 0;
  border-radius: 35px 35px 0 0;
  margin: 0 auto;
  overflow: hidden;
  width: 80%;
  height: 100%;
  background-color: var(--color-white);
  animation: ${fadeIn} 500ms;
`;
