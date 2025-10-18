import { create } from "zustand";
interface GameLoadingState {
  loading: boolean;
  setLoading: (loading: boolean) => void;
}
export const useGameLoadingStore = create<GameLoadingState>((set) => ({
  loading: true,
  setLoading: (loading: boolean) => set({ loading }),
}));
