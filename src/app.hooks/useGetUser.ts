import {useStoreSSR} from 'app.store/rootStore';

export const useGetUser = () => {
  return useStoreSSR((state: any) => state.intoAPP);
};

export default useGetUser;
