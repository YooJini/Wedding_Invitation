import styled from "styled-components";
import PhotoListItem from "./PhotoListItem";
import Overlay from "./Overlay";
import { useCallback, useState } from "react";
import { photoUrls } from "../data";

type Props = {
  onClose: () => void;
};

const Wrapper = styled.div`
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.2);
  background-color: #f8faeb;
  border-radius: 8px;
  width: 100%;
  max-width: 500px;
  height: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 20px 0;
  width: 100%;
  height: 100%;
`;

// 현재 보고 있는 사진 큰화면으로
const CurrentPhoto = styled.div`
  width: 80%;
  height: 60%;
  border: 1px solid #ddd;
  background-color: white;
  /* margin: 16px 0; */
  padding: 12px 12px 16px 12px;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;

  img {
    width: 100%;
    height: 80%;
  }
`;
const Film = styled.div`
  position: relative;
  width: 80%;
  height: 120px;

  background: #3d3939; /* 필름 배경 */
  border-radius: 8px;
  border: 1px solid #444;

  /* 필름 구멍(마크) 위쪽 */
  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 3px;
    height: 4px;
    background: repeating-linear-gradient(
      to right,
      transparent 0 5px,
      #fff 10px 15px,
      transparent 10px 20px
    );
    border-radius: 8px;
    z-index: 1;
  }
  /* 필름 구멍(마크) 아래쪽 */
  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 3px;
    height: 4px;
    background: repeating-linear-gradient(
      to right,
      transparent 0 5px,
      #fff 10px 15px,
      transparent 10px 20px
    );
    border-radius: 8px;
    z-index: 1;
  }
`;

// 사진 리스트
const PhotoList = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow-x: auto;
  width: 100%;
  height: 100%;
`;

const LoadingStyle = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255);
  z-index: 1000;
`;

const Gallery = ({ onClose }: Props) => {
  const photos = photoUrls;
  const [remaining, setRemaining] = useState(5);

  const onOneDone = useCallback(() => {
    setRemaining((r) => Math.max(0, r - 1));
  }, []);

  const done = remaining === 0;

  return (
    <Overlay>
      {!done && (
        <>
          <LoadingStyle />
          {photos.map((photoUrl) => (
            <img src={photoUrl} onLoad={onOneDone} />
          ))}
        </>
      )}
      {done && (
        <Wrapper>
          <Content>
            <CurrentPhoto>
              <img src={photos[0]} alt="current photo"></img>
            </CurrentPhoto>
            <Film>
              <PhotoList>
                {photos.map((photoUrl, index) => (
                  <PhotoListItem key={index} url={photoUrl} />
                ))}
              </PhotoList>
            </Film>
            <button onClick={onClose}>닫기</button>
          </Content>
        </Wrapper>
      )}
    </Overlay>
  );
};

export default Gallery;
