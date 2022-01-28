import React, { useEffect } from 'react';
import AdminLayout from './AdminLayout';
import AppLayout from './AppLayout';
import styled from 'styled-components';
import { useGetUser, useStoreIntoAPP } from 'app.store/intoAPP/store.intoAPP';

const App = ({ componentContent }) => {
  // TO DO: 어드민 계정 여부 확인
  const intoAPPGetUser = useStoreIntoAPP((state) => state.requestAuthUser);
  const getUser = useGetUser();
  const { isLoading, info } = getUser;
  useEffect(() => {
    intoAPPGetUser();
  }, []);

  console.log(getUser);

  if (isLoading) return null;
  if (info?.isAdmin) return <AdminLayout componentContent={componentContent} />;
  return <AppLayout componentContent={componentContent} />;
};

export default App;

const StyledWrapper = styled.div`
  width: 100vw;
  min-width: 1024px;
  height: 100%;
  min-height: 100vh;
`;
