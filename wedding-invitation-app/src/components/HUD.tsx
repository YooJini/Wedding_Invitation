import styled from "styled-components";
import ControllerUI from "./ControllerUI";
import Tooltip from "./Tooltip";
import { useTooltipStore } from "../stores/useTooltipStore";
import { useGameUIStore } from "../stores/useGameUIStore";

const HUD = () => {
  const { visible, text, x, y, type, onConfirm, hideTooltip } =
    useTooltipStore();
  const openGallery = useGameUIStore((s) => s.openGallery);

  const handleConfirm = () => {
    hideTooltip();
    if (onConfirm) {
      onConfirm();
    } else {
      if (type === "gallery") openGallery();
      // 기타 타입 처리
    }
  };

  return (
    <Overlay>
      <ControllerWrapper>
        <ControllerUI />
      </ControllerWrapper>
      {visible && (
        <Tooltip text={text} x={x} y={y}>
          {onConfirm && <button onClick={handleConfirm}>보기</button>}
        </Tooltip>
      )}
    </Overlay>
  );
};

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  max-width: 600px;
  pointer-events: none;
`;

const ControllerWrapper = styled.div`
  position: absolute;
  right: 32px;
  bottom: 32px;
  pointer-events: auto;
`;

export default HUD;
