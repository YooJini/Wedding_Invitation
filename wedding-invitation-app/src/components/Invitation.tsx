import styled from "styled-components";
import Overlay from "./Overlay";

const Invitation = ({ onClose }: { onClose: () => void }) => {
  // TODO
  // 교통 정보
  // 식사 안내
  return (
    <Overlay>
      <InvitationStyles>
        <Content>
          <button onClick={onClose}>X</button>
          <h1>초대장</h1>
          <h2>진이 👰🩷🤵 현상</h2>
          <p>진이와 현상이의 결혼식에 초대합니다.</p>
          <p>언제: 2025년 11월 8일 토요일 오후 5시</p>
          <p>어디서: 수원 라온몽드 하우스 웨딩</p>
        </Content>
      </InvitationStyles>
    </Overlay>
  );
};

export default Invitation;

const InvitationStyles = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
  width: 80vw;
  height: 90vh;
  border-radius: 8px;
  overflow-y: scroll;
  background-color: #fefff3;
`;

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    padding: 3px 6px;
    font-size: 1rem;
    background-color: transparent;
    border: 2px solid #333;
    border-radius: 5px;
  }
`;
