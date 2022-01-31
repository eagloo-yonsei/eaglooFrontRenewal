import React, { useEffect } from 'react';
import styled from 'styled-components';
import ScreenSignUp from 'app.feature/signup/screen/ScreenSignUp';
import { useGetUser } from 'app.store/intoAPP/store.intoAPP';
import { useRouter } from 'next/router';
import { fadeIn } from 'app.styled/keyframe';

const Page_SignUp = () => {
  const getUser = useGetUser();
  const router = useRouter();

  useEffect(() => {
    if (!getUser?.isLoading && getUser?.login) router.push('/');
  }, []);

  if (getUser?.isLoading || getUser?.login) return null;
  return (
    <StyledWrapper>
      <ScreenSignUp />
    </StyledWrapper>
  );
};

export default Page_SignUp;

const StyledWrapper = styled.div`
  margin: 0 auto;
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  animation: ${fadeIn} 500ms;
`;
