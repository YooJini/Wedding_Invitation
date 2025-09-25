// 맵 내에서의 UI 상태 관리 스토어
import { create } from "zustand";

type GameUIState = {
  galleryOpen: boolean;
  openGallery: () => void;
  closeGallery: () => void;
};

export const useGameUIStore = create<GameUIState>((set) => ({
  galleryOpen: false,
  openGallery: () => set({ galleryOpen: true }),
  closeGallery: () => set({ galleryOpen: false }),
}));
