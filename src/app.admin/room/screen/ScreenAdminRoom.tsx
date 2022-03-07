import React from 'react';
import { SidebarPageContainer } from 'app.components/SidebarPageContainer';
import AdminRoomActiveRooms from '../component/Admin__Room__ActiveRooms';
import AdminRoomAllRoom from '../component/Admin__Room__AllRoom';

export default function ScreenAdminRoom() {
  return (
    <SidebarPageContainer
      contentTitles={['모든 방', '활성화된 방']}
      contents={[AdminRoomAllRoom(), AdminRoomActiveRooms()]}
    />
  );
}
