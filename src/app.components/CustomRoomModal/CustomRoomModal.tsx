import React from 'react';
import CustomRoomModalProvider from './CustomRoomModalProvider';
import CustomRoomModalContainer from './CustomRoomModalContainer';
import { useGetUser } from 'app.store/intoAPP/store.intoAPP';

export default function CustomRoomModal({
  showCustomRoomModal,
  setShowCustomRoomModal,
}) {
  const getUser = useGetUser();

  if (getUser?.isLoading) return null;
  return (
    <CustomRoomModalProvider
      isLoggedIn={getUser?.login}
      userInfo={getUser?.info}
      setShowCustomRoomModal={setShowCustomRoomModal}
    >
      <CustomRoomModalContainer
        showCustomRoomModal={showCustomRoomModal}
        setShowCustomRoomModal={setShowCustomRoomModal}
      />
    </CustomRoomModalProvider>
  );
}
