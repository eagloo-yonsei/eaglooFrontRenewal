import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useGetUser } from 'app.store/intoAPP/store.intoAPP';
import Loading from 'app.components/Loading/Loading';
import { useRouter } from 'next/router';
import ScreenTestShare from 'app.feature/test/screen/ScreenTestShare';

const Page_TestShare = () => {
  const router = useRouter();
  const getUser = useGetUser();

  if (getUser?.isLoading || !getUser?.login) return <Loading />;
  return <Room getUser={getUser} />;
};

const Room = ({ getUser }) => {
  return (
    <StyledWrapper>
      <ScreenTestShare userInfo={getUser?.info} socketRef={getUser?.socket} />
    </StyledWrapper>
  );
};
export default Page_TestShare;

const StyledWrapper = styled.div`
  height: 100%;
`;
