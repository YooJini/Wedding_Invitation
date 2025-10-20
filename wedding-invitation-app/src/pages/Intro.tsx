// 앱의 첫 시작 페이지
// 모바일 청첨장 확인 또는 결혼식장 맵 체험 선택 가능

import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Intro = () => {
  const navigate = useNavigate();
  const handleMapView = () => {
    navigate("/map"); // 맵 페이지로 이동하는 함수
  };
  return (
    <IntroStyles>
      <div className="title">
        <span style={{ fontSize: "20px" }}>jini & hyunsang</span>
        <span style={{ fontSize: "35px" }}>Wedding Day</span>
      </div>
      {/* <span>2025.11.08 (토) 17:00</span>
        <span>수원 라온몽드 하우스 웨딩</span> */}

      <button onClick={handleMapView}>ENTER MAP</button>
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
  gap: 30px;

  button {
    z-index: 1;
  }

  &::before {
    content: "";
    position: absolute;
    background: url("/intro.png") center/cover no-repeat;
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

  .title {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    text-shadow: #372e2e 0px 0px 10px;
  }
`;
