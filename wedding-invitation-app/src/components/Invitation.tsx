import styled from "styled-components";
import Overlay from "./Overlay";

const Invitation = ({ onClose }: { onClose: () => void }) => {
  return (
    <Overlay>
      <InvitationStyles>
        <Content>
          <button onClick={onClose}>X</button>
          <h1>초대장</h1>
          <h2>진이 👰🩷🤵 현상</h2>
          <p>진이와 현상이의 결혼식에 초대합니다.</p>
          <br />
          <p>언제: 2025년 11월 8일 토요일 오후 5시</p>
          <p>어디서: 수원 라온몽드 하우스 웨딩</p>
          <Transportation>
            <h3>🚎 셔틀 안내</h3>
            <p>
              • 308루6671 검정 카니발 <br />
              • 고용노동부경기지청 앞 버스정류장
              <br />
              (성균관대역 1번출구 대각선 율전동성당) <br />
              🕛운행 시간 <br />
              전: 15:40 / 16:00 / 16:20 / 16:45 <br />
              후: 19:00 / 19:30
            </p>
          </Transportation>
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
  min-width: 80vw;
  max-width: fit-content;
  max-height: 80vh;
  border-radius: 8px;
  overflow-y: scroll;
  background-color: #fefff3;
  border: 2px solid #333;

  p {
    font-size: 0.8rem;
    margin-top: -10px;
  }
`;

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em 1em;

  button {
    position: absolute;
    top: 1em;
    right: 1em;
    padding: 0.1em 0.3em;
    font-size: 1rem;
    background-color: transparent;
    border: 2px solid #333;
    border-radius: 5px;
  }
`;

const Transportation = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;
