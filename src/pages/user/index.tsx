import React from 'react';
import { useGetUser } from 'app.store/intoAPP/store.intoAPP';
import ScreenAdminUserProvider from '../../app.admin/user/screen/ScreenAdminUserProvider';
import ScreenAdminUser from '../../app.admin/user/screen/ScreenAdminUser';

const Page_Home: any = () => {
  const getUser = useGetUser();

  return (
    <>
      <ScreenAdminUserProvider>
        <ScreenAdminUser />
      </ScreenAdminUserProvider>
    </>
  );
};

export default Page_Home;
