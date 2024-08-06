import { StateCreator } from 'zustand';

export interface ToastStoreState {
  toastText: string;
  toastState: boolean;
  onToast: (text?: string) => void;
  offToast: () => void;
}

export const createToastSlice: StateCreator<ToastStoreState> = (set) => ({
  toastText: '잠깐! 답을 알려주세요 😅',
  toastState: false,
  onToast: (text?: string) => {
    if (text) set({ toastText: text });
    set({ toastState: true });
    setTimeout(() => {
      set({ toastState: false });
      set({ toastText: '잠깐! 답을 알려주세요 😅' }); // toastState 리셋
    }, 2000);
  },
  offToast: () => set({ toastState: false }),
});
