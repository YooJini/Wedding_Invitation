import { create } from "zustand";

type Direction = "up" | "down" | "left" | "right" | null;

interface GameControllerState {
  direction: Direction;
  setDirection: (dir: Direction) => void;
}

export const useGameControllerStore = create<GameControllerState>((set) => ({
  direction: null,
  setDirection: (dir) => set({ direction: dir }),
}));
