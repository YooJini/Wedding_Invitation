import styled from "styled-components";
import ControllerUI from "./ControllerUI";
import Tooltip from "./Tooltip";
import { useTooltipStore } from "../stores/useTooltipStore";

const HUD = () => {
  const { visible, text, x, y, onConfirm, hideTooltip } = useTooltipStore();

  const handleConfirm = () => {
    hideTooltip();
    if (onConfirm) {
      onConfirm();
    }
  };

  return (
    <Overlay>
      <ControllerWrapper>
        <ControllerUI />
      </ControllerWrapper>
      {visible && (
        <Tooltip text={text} x={x} y={y}>
          {onConfirm && (
            <>
              <br />
              <button
                onClick={handleConfirm}
                style={{
                  display: "block",
                  margin: "8px auto 0 auto",
                }}
              >
                보기
              </button>
            </>
          )}
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
