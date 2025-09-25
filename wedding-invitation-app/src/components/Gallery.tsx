import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.7);
`;

const Content = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.2);
  width: 100%;
  text-align: center;
`;
const Gallery = ({ onClose }: { onClose: () => void }) => (
  <Overlay>
    <Content>
      <h2>갤러리</h2>
      {/* 갤러리 내용 */}
      <button onClick={onClose}>닫기</button>
    </Content>
  </Overlay>
);

export default Gallery;
