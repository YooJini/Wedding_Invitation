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
            <p>🎉 Welcome !</p>
            <p>
              이곳에서 웨딩 사진과 예식 관련 정보를 볼 수 있어요.
              <br />
              맵을 돌아다니며 즐겨주세요!
            </p>
          </Content>
          <button
            className="back-button"
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
  width: 300px;
  max-height: fit-content;
  border-radius: 8px;
  overflow-y: scroll;
  background-color: #fefff3;
  border: 2px solid #333;

  .back-button {
    position: absolute;
    right: 20px;
    top: 16px;
    padding: 3px 6px;
    font-size: 14px;
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
