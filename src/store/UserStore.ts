import { StateCreator } from 'zustand';
export interface UserState {
  team: string;
  nickname: string;
  setTeam: (team: string) => void;
  setNickname: (nickname: string) => void;
}
export const createUserSlice: StateCreator<UserState> = (set) => ({
  team: '',
  nickname: '',
  setTeam: (team: string) => set({ team }),
  setNickname: (nickname: string) => set({ nickname }),
});
