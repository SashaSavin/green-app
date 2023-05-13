import { create } from 'zustand';

interface User {
  id: number;
  name: string;
  message: string;
}

interface State {
  data: User[];
  setUser: (user: User) => void;
}

export const useActiveChatStore = create<State>((set) => ({
  data: [],
  setUser: (user) => set((state) => ({ data: [...state.data, user] }))
}));
