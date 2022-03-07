import React from 'react';
import AdminUserAllUser from '../component/Admin__User__AllUser';
import AdminUserAllConnectedUser from '../component/Admin__User__AllConnectedUser';
import AdminUserCreateTestUser from '../component/Admin__User__CreateTestUser';
import { SidebarPageContainer } from 'app.components/SidebarPageContainer';

export default function ScreenAdminUser() {
  return (
    <SidebarPageContainer
      contentTitles={['모든 유저', '접속 중인 유저', '테스트 유저 생성']}
      contents={[
        AdminUserAllUser(),
        AdminUserAllConnectedUser(),
        AdminUserCreateTestUser(),
      ]}
    />
  );
}
