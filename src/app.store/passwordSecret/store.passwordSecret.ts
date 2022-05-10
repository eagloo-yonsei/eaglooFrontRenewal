import create from 'zustand';

export const useStorePasswordSecret = create<any>((set) => ({
  passwordSecret: false,

  setPasswordSecret: () => {
    set((state) => ({
      passwordSecret: !state.passwordSecret,
    }));
  },
}));
