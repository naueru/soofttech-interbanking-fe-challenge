// Core
import { create } from "zustand";

// Mocks
import { INITIAL_STATE } from "../mocks/mocks";

export interface IStore {
  phrases: string[];
  addPhrase: (newPhrase: string) => void;
  deletePhrase: (index: number) => void;
}

const useStore = create<IStore>((set) => ({
  phrases: INITIAL_STATE,
  addPhrase: (newPhrase: string) =>
    set((state) => ({ phrases: [...state.phrases, newPhrase] })),
  deletePhrase: (index: number) =>
    set((state) => ({
      phrases: state.phrases.filter((_, idx) => idx !== index),
    })),
}));

export default useStore;
