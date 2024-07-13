import { StateCreator } from 'zustand';

export type SelectedIndexType = {
  index: number[] | number | null;
};

export interface SelectedIndexStoreState {
  selectedIndex: SelectedIndexType[];
  setSelectedIndex: (newIndex: number | number[], step: number) => void;
}

const defaultSelectedIndex: SelectedIndexType[] = [
  {
    index: null,
  },
  {
    index: null,
  },
  {
    index: [],
  },
];

export const createSelectedIndexSlice: StateCreator<SelectedIndexStoreState> = (
  set
) => ({
  selectedIndex: defaultSelectedIndex,
  setSelectedIndex: (newIndex: number | number[], step: number) =>
    set((state) => {
      const updatedSelectedIndex = state.selectedIndex.map((item, index) => {
        if (index === step) {
          return {
            ...item,
            index: newIndex,
          };
        }
        return item;
      });
      return { selectedIndex: updatedSelectedIndex };
    }),
});
