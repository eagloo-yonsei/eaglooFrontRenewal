import create from 'zustand';

export const useStoreRoomUsingInfo = create<any>((set) => ({
  roomUsingInfo: {
    roomType: null,
    roomId: null,
    roomName: null,
    seatNo: null,
    endTime: null,
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
  return useStoreRoomUsingInfo((state) => state.roomUsingInfo);
};
