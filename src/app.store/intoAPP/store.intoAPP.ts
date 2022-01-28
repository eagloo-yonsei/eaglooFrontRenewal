import create from 'zustand';
import { parseCookies } from 'nookies';

export const useStoreIntoAPP = create<any>((set) => ({
  getUser: {
    login: false,
    isLoading: true,
    info: null,
  },

  requestAuthUser: async (): Promise<any> => {
    const cookies = parseCookies();
    const userInfo = cookies['_eagloo_user_info'];
    if (userInfo) {
      set((state) => ({
        getUser: {
          ...state.getUser,
          login: true,
          isLoading: false,
          info: JSON.parse(userInfo),
        },
      }));
    } else {
      set((state) => {
        return {
          getUser: {
            login: false,
            isLoading: false,
            info: null,
          },
        };
      });
    }
  },
}));

export const useGetUser = () => {
  return useStoreIntoAPP((state) => state.getUser);
};
