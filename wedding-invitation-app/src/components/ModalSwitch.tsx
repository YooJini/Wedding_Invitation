// ModalSwitch.tsx (요지)
import { useGameUIStore } from "../stores/useGameUIStore";
import Gallery from "./Gallery";
import Invitation from "./Invitation";

export default function ModalSwitch() {
  const { modal } = useGameUIStore();
  const close = () => useGameUIStore.getState().closeModal();

  if (modal.kind === "none") return null;

  if (modal.kind === "gallery") return <Gallery onClose={close} />;
  if (modal.kind === "invitation") return <Invitation onClose={close} />;

  return null;
}
