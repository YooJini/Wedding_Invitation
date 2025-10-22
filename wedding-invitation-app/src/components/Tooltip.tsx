import styled from "styled-components";

type TooltipProps = {
  text: string;
  x: number;
  y: number;
  visible?: boolean;
  maxWidth?: number;
  children?: React.ReactNode;
};

const Tooltip = ({ text, x, y, visible = true, children }: TooltipProps) => {
  return (
    <TooltipStyle
      style={{ left: x, top: y }}
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
  min-width: 15em;
  padding: 1em 1em;
  border-radius: 12px;
  background: #fefff3d9;
  color: #333;
  font-size: 0.6rem;
  line-height: 1.3;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(6px);
  white-space: pre-wrap;
  pointer-events: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &[data-visible="1"] {
    opacity: 1;
  }

  &[data-visible="0"] {
    opacity: 0;
  }
`;

export default Tooltip;
