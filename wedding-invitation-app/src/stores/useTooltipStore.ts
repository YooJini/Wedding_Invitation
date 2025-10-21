import { create } from "zustand";

type TooltipType = "gallery" | "notice" | "program " | "custom";

interface TooltipState {
  visible: boolean;
  text: string;
  x: number;
  y: number;
  type: TooltipType;
  onConfirm?: () => void;
  showTooltip: (params: {
    text: string;
    x: number;
    y: number;
    type?: TooltipType;
    onConfirm?: () => void;
  }) => void;
  hideTooltip: () => void;
}

export const useTooltipStore = create<TooltipState>((set) => ({
  visible: false,
  text: "",
  x: 0,
  y: 0,
  type: "custom",
  onConfirm: undefined,
  showTooltip: ({ text, x, y, type = "custom", onConfirm }) =>
    set({ visible: true, text, x, y, type, onConfirm }),
  hideTooltip: () => set({ visible: false, onConfirm: undefined }),
}));
