import { StateCreator } from 'zustand';
export interface UserState {
  total: number;
  team: string;
  nickname: string;
  setTotal: (total: number) => void;
  setTeam: (team: string) => void;
  setNickname: (nickname: string) => void;
  resetUserData: () => void;
}
export const createUserSlice: StateCreator<UserState> = (set) => ({
  total: 0,
  team: '',
  nickname: '',
  setTotal: (total: number) => set({ total }),
  setTeam: (team: string) => set({ team }),
  setNickname: (nickname: string) => set({ nickname }),
  resetUserData: () => {
    set({ total: 0 });
    set({ team: '' });
    set({ nickname: '' });
  },
});
