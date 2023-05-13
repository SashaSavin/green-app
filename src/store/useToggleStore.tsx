import { create } from 'zustand';

interface ToggleState {
  showPage: boolean;

  togglePage: () => void;
}

const useToggleStore = create<ToggleState>((set) => ({
  showPage: false,
  togglePage: () => set((state) => ({ showPage: !state.showPage }))
}));

export default useToggleStore;
