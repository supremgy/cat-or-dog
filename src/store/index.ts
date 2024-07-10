import { create } from 'zustand';
import { createUserSlice, UserState } from './UserStore';
import { createJSONStorage, persist } from 'zustand/middleware';
import { createSurveySlice, SurveyState } from './SurveyStore';

export const useStore = create<UserState & SurveyState>((...args) => ({
  ...persist(createUserSlice, {
    name: 'user-storage',
    partialize: (state) => ({
      team: state.team,
      nickname: state.nickname,
    }),
    storage: createJSONStorage(() => localStorage),
  })(...args),

  ...persist(createSurveySlice, {
    name: 'survey-storage',
    partialize: (state) => ({
      team: state.step,
      nickname: state.total,
    }),
    storage: createJSONStorage(() => localStorage),
  })(...args),
}));
