import styled from "styled-components";
import { useGameControllerStore } from "../stores/useGameControllerStore";
import { BsDpad } from "react-icons/bs";

const DPadWrapper = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
`;

const DPadBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background: "rgba(25,20,15,0.9)"; */
  /* box-shadow: "0 8px 20px rgba(0,0,0,0.5)"; */
  pointer-events: none;
`;

const DirButton = styled.button<{ pos: string }>`
  position: absolute;
  width: 30px;
  height: 30px;
  background: #858585;
  opacity: 0.4;
  /* color: transparent; */
  /* background: "rgba(38, 38, 38, 0.98)"; */
  /* box-shadow: "0 8px 20px rgba(0,0,0,0.5)"; */
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
      <DPadBg>
        <BsDpad size={100} color="#403f3f" />
      </DPadBg>
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
