import create from 'zustand';
import { destroyCookie, parseCookies } from 'nookies';

export const useStoreIntoAPP = create<any>((set) => ({
  getUser: {
    login: false,
    isLoading: true,
    socket: null,
    info: null,
  },

  updateAuthUser: async (data): Promise<any> => {
    set((state) => ({
      getUser: {
        ...state.getUser,
        ...data,
      },
    }));
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

  logoutAuthUser: async (): Promise<any> => {
    set((state) => {
      destroyCookie(null, '_eagloo_user_info');
      return {
        getUser: {
          login: false,
          isLoading: false,
          info: null,
        },
      };
    });
  },

  setSocket: async (socketData): Promise<any> => {
    set((state) => {
      return {
        getUser: {
          ...state?.getUser,
          socket: socketData,
        },
      };
    });
  },
}));

export const useGetUser = () => {
  return useStoreIntoAPP((state) => state.getUser);
};
