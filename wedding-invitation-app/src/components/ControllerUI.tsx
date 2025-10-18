import styled from "styled-components";
import { useGameControllerStore } from "../stores/useGameControllerStore";
import { BsDpad } from "react-icons/bs";

const DPadWrapper = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
`;

const DirButton = styled.button<{ pos: string }>`
  position: absolute;
  width: 30px;
  height: 30px;
  background: #4a4a4a;
  opacity: 0.2;
  cursor: pointer;
  user-select: none;
  &:active {
    opacity: 0.8;
  }
  ${({ pos }) =>
    (pos === "up" && "top: 2px; left: 50%; transform: translateX(-50%);") ||
    (pos === "down" &&
      "bottom: 2px; left: 50%; transform: translateX(-50%);") ||
    (pos === "left" && "left: 2px; top: 50%; transform: translateY(-50%);") ||
    (pos === "right" && "right: 2px; top: 50%; transform: translateY(-50%);")}
`;

const ControllerUI = () => {
  const setDirection = useGameControllerStore((s) => s.setDirection);
  return (
    <DPadWrapper>
      <BsDpad size={100} color="#403f3f" />
      <DirButton
        pos="up"
        onPointerDown={() => setDirection("up")}
        onPointerUp={() => setDirection(null)}
        aria-label="up"
      ></DirButton>
      <DirButton
        pos="down"
        onPointerDown={() => setDirection("down")}
        onPointerUp={() => setDirection(null)}
        aria-label="down"
      ></DirButton>
      <DirButton
        pos="left"
        onPointerDown={() => setDirection("left")}
        onPointerUp={() => setDirection(null)}
        aria-label="left"
      ></DirButton>
      <DirButton
        pos="right"
        onPointerDown={() => setDirection("right")}
        onPointerUp={() => setDirection(null)}
        aria-label="right"
      ></DirButton>
    </DPadWrapper>
  );
};

export default ControllerUI;
