import { createToastSlice, ToastStoreState } from './ToastStore';
import { create } from 'zustand';
import { createUserSlice, UserStoreState } from './UserStore';
import { createJSONStorage, persist } from 'zustand/middleware';
import {
  createSelectedIndexSlice,
  SelectedIndexStoreState,
} from './AnswerStore';

type AppState = UserStoreState &
  SelectedIndexStoreState &
  ToastStoreState & {
    modalState: boolean;
    setModalState: (modalState: boolean) => void;

    currentStep: number;
    setCurrentStep: (step: number) => void;

    resetAllData: () => void;

    isLoading: boolean;
    setIsLoading: (state: boolean) => void;
  };

export const useStore = create<AppState>()(
  persist(
    (set, get, api) => ({
      ...createUserSlice(set, get, api),
      ...createSelectedIndexSlice(set, get, api),
      ...createToastSlice(set, get, api),

      modalState: false,
      setModalState: (modalState: boolean) => set({ modalState }),

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
          isLoading: false,
        }));
      },

      isLoading: false,
      setIsLoading: (state: boolean) => set({ isLoading: state }),
    }),
    {
      name: 'app-storage',
      partialize: (state) => ({
        team: state.team,
        nickname: state.nickname,
        total: state.total,
        selectedIndex: state.selectedIndex,
        currentStep: state.currentStep,
        isLoading: state.isLoading,
      }),
      storage: createJSONStorage(() => localStorage),
    }
  )
);
