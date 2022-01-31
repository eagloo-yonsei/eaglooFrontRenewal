import React, { useEffect } from 'react';
import styled from 'styled-components';
import io from 'socket.io-client';
import AdminLayout from './AdminLayout';
import AppLayout from './AppLayout';
import { useGetUser, useStoreIntoAPP } from 'app.store/intoAPP/store.intoAPP';

const App = ({ componentContent }) => {
  const intoAPPGetUser = useStoreIntoAPP((state) => state.requestAuthUser);
  const setSocket = useStoreIntoAPP((state) => state.setSocket);

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
