import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Message = {
  sender: string;
  text: string;
  user: string;
};

type ChatStore = {
  messages: Message[];
  selectedUser: string;
  addMessage: (message: Message) => void;
  selectUser: (userId: string) => void;
};

export const useChatStore = create<ChatStore>()(
  persist<ChatStore>(
    (set) => ({
      messages: [],
      selectedUser: '',
      addMessage: (message) => set((state) => ({ messages: [...state.messages, message] })),
      selectUser: (userId) => set(() => ({ selectedUser: userId }))
    }),
    {
      name: 'user-chat'
    }
  )
);
