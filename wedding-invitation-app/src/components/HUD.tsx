import styled from "styled-components";
import ControllerUI from "./ControllerUI";

const HUD = () => {
  return (
    <Overlay>
      <ControllerWrapper>
        <ControllerUI />
      </ControllerWrapper>
    </Overlay>
  );
};

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  max-width: 600px;
  max-height: 800px;
  pointer-events: none;
`;

const ControllerWrapper = styled.div`
  position: absolute;
  right: 32px;
  bottom: 32px;
  pointer-events: auto;
`;

export default HUD;
