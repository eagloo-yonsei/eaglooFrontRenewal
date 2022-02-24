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

  setRoomUsingInfo: async (roomUsingInfo): Promise<any> => {
    set((state) => {
      return {
        roomUsingInfo: {
          ...state.roomUsingInfo,
          ...roomUsingInfo,
        },
      };
    });
  },
}));

export const useGetRoomUsingInfo = () => {
  const router = useRouter();
  const { roomType, roomId, roomName, seatNo, endTime } = router.query;

  return {
    roomType,
    roomId,
    roomName,
    seatNo,
    endTime,
    isLoading: false,
  };
};
