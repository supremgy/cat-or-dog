import { StateCreator } from 'zustand';

export interface ToastStoreState {
  toastState: boolean;
  onToast: () => void;
  offToast: () => void;
}

export const createToastSlice: StateCreator<ToastStoreState> = (set) => ({
  toastState: false,
  onToast: () => {
    set({ toastState: true });
    setTimeout(() => {
      set({ toastState: false });
    }, 2000);
  },
  offToast: () => set({ toastState: false }),
});
