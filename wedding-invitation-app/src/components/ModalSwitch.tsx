// ModalSwitch.tsx (요지)
import { useGameUIStore } from "../stores/useGameUIStore";
import Gallery from "./Gallery";
import Guide from "./Guide";
import Invitation from "./Invitation";
import Program from "./Program";

export default function ModalSwitch() {
  const { modal } = useGameUIStore();
  const close = () => useGameUIStore.getState().closeModal();

  if (modal.kind === "none") return null;

  if (modal.kind === "gallery") return <Gallery onClose={close} />;
  if (modal.kind === "invitation") return <Invitation onClose={close} />;
  if (modal.kind === "guide") return <Guide onClose={close} />;
  if (modal.kind === "program") return <Program onClose={close} />;

  return null;
}
