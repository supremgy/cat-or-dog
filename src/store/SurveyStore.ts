import { StateCreator } from 'zustand';

export interface SurveyState {
  step: string;
  total: number;
  setStep: (step: string) => void;
  addScore: (score: number) => void;
}

export const createSurveySlice: StateCreator<SurveyState> = (set) => ({
  step: 'step1',
  total: 0,
  setStep: (step: string) => set({ step }),
  addScore: (score: number) => set((state) => ({ total: state.total + score })),
});
