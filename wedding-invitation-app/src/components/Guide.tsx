import styled from "styled-components";
import Overlay from "./Overlay";

const Guide = ({ onClose }: { onClose: () => void }) => {
  // TODO
  // 교통 정보
  // 식사 안내
  const watchedGuide = localStorage.getItem("watchedGuide");
  return (
    !watchedGuide && (
      <Overlay>
        <Wrapper>
          <Content>
            <p style={{ fontSize: "1rem" }}>🎉 Welcome !</p>
            <p>
              이곳에서 웨딩 사진과 예식 관련 정보를 볼 수 있어요.
              <br />
              맵을 돌아다니며 즐겨주세요!
            </p>
          </Content>
          <button
            onClick={() => {
              onClose();
              localStorage.setItem("watchedGuide", "true");
            }}
          >
            X
          </button>
        </Wrapper>
      </Overlay>
    )
  );
};

export default Guide;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 80vw;
  max-height: fit-content;
  border-radius: 8px;
  overflow-y: scroll;
  background-color: #fefff3;
  border: 2px solid #333;
  padding: 0 0 1em 0;

  button {
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    font-size: 0.5rem;
    padding: 3px 6px;
    background-color: transparent;
    border: 2px solid #333;
    border-radius: 5px;
  }
`;

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 16px;
`;
