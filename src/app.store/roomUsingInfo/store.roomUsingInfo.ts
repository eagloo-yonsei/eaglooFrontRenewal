import create from 'zustand';
import { parseCookies, setCookie } from 'nookies';
import { useRouter } from 'next/router';

export const useStoreRoomUsingInfo = create<any>((set) => ({
  roomUsingInfo: {
    roomType: null,
    roomId: null,
    roomName: null,
    seatNo: null,
    endTime: null,
    isLoading: true,
  },

  requestRoomUsingInfo: async () => {
    const cookies = parseCookies();
    const roomUsingInfo = cookies['_eagloo_room_info'];

    if (roomUsingInfo) {
      set((state) => {
        return {
          roomUsingInfo: {
            ...JSON.parse(roomUsingInfo),
          },
        };
      });
    } else {
      set((state) => {
        return {
          roomUsingInfo: {
            ...JSON.parse(roomUsingInfo),
          },
        };
      });
    }
  },

  removeRoomUsingInfo: async (): Promise<any> => {
    sessionStorage.removeItem('_eagloo_roomUsingInfo');
    await set((state) => {
      return {
        roomUsingInfo: {
          roomType: null,
          roomId: null,
          roomName: null,
          seatNo: null,
          endTime: null,
          isLoading: false,
        },
      };
    });
  },

  setRoomUsingInfo: async (roomUsingInfo): Promise<any> => {
    sessionStorage.setItem(
      '_eagloo_roomUsingInfo',
      JSON.stringify({
        ...roomUsingInfo,
        isLoading: false,
      })
    );
    await set((state) => {
      return {
        roomUsingInfo: {
          ...state.roomUsingInfo,
          ...roomUsingInfo,
          isLoading: false,
        },
      };
    });
  },
}));

export const useGetRoomUsingInfo = () => {
  const roomUsingInfo = JSON.parse(
    sessionStorage.getItem('_eagloo_roomUsingInfo')
  );
  if (roomUsingInfo) return roomUsingInfo;
  return useStoreRoomUsingInfo((state) => state.roomUsingInfo);
};
