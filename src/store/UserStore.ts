import { StateCreator } from 'zustand';
export interface UserStoreState {
  total: number;
  team: string;
  nickname: string;
  setTotal: (score: number) => void;
  setTeam: (team: string) => void;
  setNickname: (nickname: string) => void;
}
export const createUserSlice: StateCreator<UserStoreState> = (set) => ({
  total: 0,
  team: '',
  nickname: '',
  setTotal: (score: number) => set((state) => ({ total: state.total + score })),
  setTeam: (team: string) => set({ team }),
  setNickname: (nickname: string) => set({ nickname }),
});
