import { create } from 'zustand';
import { createUserSlice, UserState } from './UserStore';
import { createJSONStorage, persist } from 'zustand/middleware';

export const useStore = create<UserState>((...args) => ({
  ...persist(createUserSlice, {
    name: 'user-storage',
    partialize: (state) => ({
      team: state.team,
      nickname: state.nickname,
    }),
    storage: createJSONStorage(() => localStorage),
  })(...args),
}));
