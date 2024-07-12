import { StateCreator } from 'zustand';

export interface StepDataProps {
  question: string;
  answer?: Answer[];
  index?: number[] | number | null;
  score: number | undefined;
}
export interface Answer {
  content: string;
  value: number;
}
export interface SurveyState {
  registerData: StepDataProps[];
  setRegisterData: (data: StepDataProps[]) => void;
  resetRegisterData: () => void;
}

const defaultRegisterData: StepDataProps[] = [
  {
    question: '',
    answer: [],
    index: null,
    score: 0,
  },
  {
    question: '',
    answer: [],
    index: null,
    score: 0,
  },
  {
    question: '',
    score: undefined,
  },
  {
    question: '',
    answer: [],
    index: [],
    score: 0,
  },
];

export const createSurveySlice: StateCreator<SurveyState> = (set) => ({
  registerData: defaultRegisterData,
  setRegisterData: (data: StepDataProps[]) => set({ registerData: data }),
  resetRegisterData: () => set({ registerData: defaultRegisterData }),
});
