// 맵 내에서의 UI 상태 관리 스토어
import { create } from "zustand";

type ModalState =
  | { kind: "none" }
  | { kind: "gallery" }
  | { kind: "invitation" };

type GameUIState = {
  modal: ModalState;
  openModal: (modal: ModalState) => void;
  closeModal: () => void;
};

export const useGameUIStore = create<GameUIState>((set) => ({
  modal: { kind: "none" },
  openModal: (modal) => set({ modal }),
  closeModal: () => set({ modal: { kind: "none" } }),
}));

export const openGallery = () =>
  useGameUIStore.getState().openModal({ kind: "gallery" });

export const openInvitation = () =>
  useGameUIStore.getState().openModal({ kind: "invitation" });

export const closeAnyModal = () => useGameUIStore.getState().closeModal();
