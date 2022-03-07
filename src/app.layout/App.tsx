import React, { useEffect } from 'react';
import styled from 'styled-components';
import io from 'socket.io-client';
import AdminLayout from './AdminLayout';
import AppLayout from './AppLayout';
import { useGetUser, useStoreIntoAPP } from 'app.store/intoAPP/store.intoAPP';
import { router } from 'next/client';
import { useRouter } from 'next/router';

const App = ({ componentContent }) => {
  const intoAPPGetUser = useStoreIntoAPP((state) => state.requestAuthUser);
  const setSocket = useStoreIntoAPP((state) => state.setSocket);
  const router = useRouter();
  const getUser = useGetUser();
  const { isLoading, socket, login, info } = getUser;
  useEffect(() => {
    intoAPPGetUser();
  }, []);

  useEffect(() => {
    if (login) {
      if (info && !info.isAdmin && !socket) {
        let socket = io(process.env.EAGLOO_API_URI, {
          query: { userInfo: JSON.stringify(info) },
        });
        setSocket(socket);
      }
    } else {
      socket?.disconnect();
      setSocket(undefined);
    }
  }, [isLoading, login]);

  if (isLoading) return null;
  if (info?.isAdmin) return <AdminLayout componentContent={componentContent} />;
  if (router.pathname.includes('room') && !router.pathname.includes('entry'))
    return <>{componentContent}</>;
  return <AppLayout componentContent={componentContent} />;
};

export default App;

const StyledWrapper = styled.div`
  width: 100vw;
  min-width: 1024px;
  height: 100%;
`;
