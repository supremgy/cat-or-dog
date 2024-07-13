import { create } from 'zustand';
import { createUserSlice, UserStoreState } from './UserStore';
import { createJSONStorage, persist } from 'zustand/middleware';
import {
  createSelectedIndexSlice,
  SelectedIndexStoreState,
} from './SurveyStore';

type AppState = UserStoreState &
  SelectedIndexStoreState & {
    modalState: boolean;
    setModalState: (modalState: boolean) => void;

    toastState: boolean;
    setToastState: () => void;

    currentStep: number;
    setCurrentStep: (step: number) => void;

    resetAllData: () => void;
  };

export const useStore = create<AppState>()(
  persist(
    (set, get, api) => ({
      ...createUserSlice(set, get, api),
      ...createSelectedIndexSlice(set, get, api),
      modalState: false,
      setModalState: (modalState: boolean) => set({ modalState }),
      toastState: false,
      setToastState: () => {
        set({ toastState: true });
        setTimeout(() => {
          set({ toastState: false });
        }, 2000);
      },
      currentStep: 0,
      setCurrentStep: (step: number) => set({ currentStep: step }),
      resetAllData: () => {
        // 로컬 스토리지 초기화
        localStorage.clear();
        // 상태 초기화
        set((state) => ({
          ...state,
          ...createUserSlice(set, get, api),
          ...createSelectedIndexSlice(set, get, api),
          modalState: false,
          toastState: false,
          currentStep: 0,
        }));
      },
    }),
    {
      name: 'app-storage',
      partialize: (state) => ({
        team: state.team,
        nickname: state.nickname,
        total: state.total,
        selectedIndex: state.selectedIndex,
        currentStep: state.currentStep,
      }),
      storage: createJSONStorage(() => localStorage),
    }
  )
);
