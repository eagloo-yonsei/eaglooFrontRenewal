import create from 'zustand';

export const useStoreScheduler = create<any>((set) => ({
  schedulerOpen: false,

  setSchedulerOpen: () => {
    set((state) => ({
      schedulerOpen: !state.schedulerOpen,
    }));
  },
}));
