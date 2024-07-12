import { create } from 'zustand';
import { createUserSlice, UserState } from './UserStore';
import { createJSONStorage, persist } from 'zustand/middleware';
import { createSurveySlice, SurveyState } from './SurveyStore';

type AppState = UserState &
  SurveyState & {
    modalState: boolean;
    setModalState: (modalState: boolean) => void;
    toastState: boolean;
    setToastState: () => void;
  };

export const useStore = create<AppState>()(
  persist(
    (set, get, api) => ({
      ...createUserSlice(set, get, api),
      ...createSurveySlice(set, get, api),
      modalState: false,
      setModalState: (modalState: boolean) => set({ modalState }),
      toastState: false,
      setToastState: () => {
        set({ toastState: true });
        setTimeout(() => {
          set({ toastState: false });
        }, 2000);
      },
    }),
    {
      name: 'app-storage',
      partialize: (state) => ({
        team: state.team,
        nickname: state.nickname,
        total: state.total,
        registerData: state.registerData,
      }),
      storage: createJSONStorage(() => localStorage),
    }
  )
);
