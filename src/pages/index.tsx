import React from 'react';
import styled from 'styled-components';
import ScreenHome from 'app.feature/home/screen/ScreenHome';
import { fadeIn } from 'app.styled/keyframe';
import { useGetUser } from 'app.store/intoAPP/store.intoAPP';
import ScreenAdminHome from '../app.admin/home/screen/ScreenAdminHome';
import ScreenAdminHomeProvider from '../app.admin/home/screen/ScreenAdminHomeProvider';

const Page_Home: any = () => {
  const getUser = useGetUser();

  if (getUser?.info?.isAdmin)
    return (
      <>
        <ScreenAdminHomeProvider>
          <ScreenAdminHome />
        </ScreenAdminHomeProvider>
      </>
    );
  return (
    <StyledWrapper>
      <ScreenHome />
    </StyledWrapper>
  );
};

export default Page_Home;

const StyledWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 80%;
  margin: 0 auto;
  animation: ${fadeIn} 500ms;
`;
