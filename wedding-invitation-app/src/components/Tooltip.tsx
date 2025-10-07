import styled from "styled-components";

type TooltipProps = {
  text: string;
  x: number; // 화면 좌표(px)
  y: number; // 화면 좌표(px)
  visible?: boolean;
  maxWidth?: number;
};

const Tooltip = ({
  text,
  x,
  y,
  visible = true,
  maxWidth = 220,
}: TooltipProps) => {
  return (
    <TooltipStyle
      style={{ left: x, top: y, maxWidth }}
      data-visible={visible ? "1" : "0"}
    >
      {text}
    </TooltipStyle>
  );
};

const TooltipStyle = styled.div`
  position: absolute;
  transform: translate(-50%, calc(-100% - 12px)); /* 앵커 위에 배치 */
  padding: 8px 12px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.88);
  color: #333;
  font-size: 14px;
  line-height: 1.3;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(6px);
  white-space: normal;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.18s ease, transform 0.18s ease;

  &[data-visible="1"] {
    opacity: 1;
    transform: translate(-50%, calc(-100% - 12px)) scale(1);
  }

  &[data-visible="0"] {
    opacity: 0;
    transform: translate(-50%, calc(-100% - 6px)) scale(0.98);
  }

  /* 꼬리 */
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -6px;
    transform: translateX(-50%);
    border: 6px solid transparent;
    border-top-color: rgba(255, 255, 255, 0.88);
    filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.08));
  }
`;

export default Tooltip;
