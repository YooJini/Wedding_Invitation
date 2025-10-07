import { create } from "zustand";

type TooltipState = {
  visible: boolean;
  text: string;
  x: number;
  y: number;
  showTooltip: (text: string, x: number, y: number) => void;
  hideTooltip: () => void;
};

export const useTooltipStore = create<TooltipState>((set) => ({
  visible: false,
  text: "",
  x: 0,
  y: 0,
  showTooltip: (text, x, y) => set({ visible: true, text, x, y }),
  hideTooltip: () => set({ visible: false }),
}));
