import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import ScreenLogin from 'app.feature/login/screen/ScreenLogin';
import { useGetUser } from 'app.store/intoAPP/store.intoAPP';
import { fadeIn } from 'app.styled/keyframe';

const Page_Login = () => {
  const getUser = useGetUser();
  const router = useRouter();

  useEffect(() => {
    if (!getUser?.isLoading && getUser?.login) router.push('/');
  }, []);

  if (getUser?.isLoading || getUser?.login) return null;
  return (
    <StyledWrapper>
      <ScreenLogin />
    </StyledWrapper>
  );
};

export default Page_Login;

const StyledWrapper = styled.div`
  margin: 0 auto;
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  animation: ${fadeIn} 500ms;
`;
