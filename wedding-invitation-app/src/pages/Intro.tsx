// 앱의 첫 시작 페이지
// 모바일 청첨장 확인 또는 결혼식장 맵 체험 선택 가능

import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Intro = () => {
  const navigate = useNavigate();
  const handleQuickView = () => {
    navigate("/invitation");
  };
  const handleMapView = () => {
    navigate("/map"); // 맵 페이지로 이동하는 함수
  };
  return (
    <IntroStyles>
      <div className="content">
        <h1>Title</h1>
        <p>This is a wedding invitation app.</p>
        <div className="buttons">
          <button onClick={handleQuickView}> 간단히 보기</button>
          <button onClick={handleMapView}> 맵으로 보기</button>
        </div>
      </div>
    </IntroStyles>
  );
};

export default Intro;

const IntroStyles = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;

  &::before {
    content: "";
    position: absolute;
    background: url("/outfield.png") center/cover no-repeat;
    filter: blur(2px);
    z-index: 0;
    inset: 0;
  }

  @media (min-aspect-ratio: 16/9) {
    &::before {
      background-size: contain;
      background-color: #fff;
    }
  }

  .content {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    color: #fff;
    text-shadow: #372e2e 0px 0px 10px;
  }

  .buttons {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;
