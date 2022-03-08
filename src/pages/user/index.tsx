import React from 'react';
import { useGetUser } from 'app.store/intoAPP/store.intoAPP';
import ScreenAdminUserProvider from '../../app.admin/user/screen/ScreenAdminUserProvider';
import ScreenAdminUser from '../../app.admin/user/screen/ScreenAdminUser';
import { useRouter } from 'next/router';
import Loading from 'app.components/Loading/Loading';

const Page_Home: any = () => {
  const { isLoading, info: userInfo } = useGetUser();
  const router = useRouter();

  if (isLoading) return <Loading />;
  if (!userInfo?.isAdmin) router.push('/');
  return (
    <>
      <ScreenAdminUserProvider>
        <ScreenAdminUser />
      </ScreenAdminUserProvider>
    </>
  );
};

export default Page_Home;
