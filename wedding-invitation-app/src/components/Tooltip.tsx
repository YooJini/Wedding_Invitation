import styled from "styled-components";

type TooltipProps = {
  text: string;
  x: number;
  y: number;
  visible?: boolean;
  maxWidth?: number;
  children?: React.ReactNode;
};

const Tooltip = ({
  text,
  x,
  y,
  visible = true,
  maxWidth = 220,
  children,
}: TooltipProps) => {
  return (
    <TooltipStyle
      style={{ left: x, top: y, maxWidth }}
      data-visible={visible ? "1" : "0"}
    >
      {text}
      {children}
    </TooltipStyle>
  );
};

const TooltipStyle = styled.div`
  position: absolute;
  transform: translate(-50%, calc(-100% - 12px));
  min-width: 120px;
  padding: 8px 12px;
  border-radius: 12px;
  background: #fefff3d9;
  color: #333;
  font-size: 14px;
  line-height: 1.3;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(6px);
  white-space: pre-wrap;
  pointer-events: auto;

  &[data-visible="1"] {
    opacity: 1;
  }

  &[data-visible="0"] {
    opacity: 0;
  }
`;

export default Tooltip;
