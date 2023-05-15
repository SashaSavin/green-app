import { UserProfile } from 'shared/types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type UserProfileStore = {
  user: UserProfile | null;
  users: UserProfile[];

  updateUser: (userData: UserProfile) => void;
  addContact: (contact: string) => void;
  removeContact: (contact: string) => void;
};

export const useProfileStore = create<UserProfileStore>()(
  persist<UserProfileStore>(
    (set) => ({
      user: null,
      users: [],
      filteredContacts: [],
      updateUser: (userData) => set(() => ({ user: userData })),

      addContact: (contact) =>
        set((state) => {
          if (state.user?.contacts?.includes(contact)) {
            return state;
          }

          return {
            user: state.user && {
              ...state.user,
              contacts: state.user.contacts ? [...state.user.contacts, contact] : [contact]
            }
          };
        }),
      removeContact: (contact) =>
        set((state) => {
          if (!state.user?.contacts?.includes(contact)) {
            return state;
          }

          return {
            user: state.user && {
              ...state.user,
              contacts: state.user.contacts.filter((c) => c !== contact)
            }
          };
        })
    }),

    {
      name: 'user-profile'
    }
  )
);
