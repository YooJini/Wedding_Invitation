import styled from "styled-components";
import PhotoListItem from "./PhotoListItem";
import Overlay from "./Overlay";
import { useCallback, useEffect, useState } from "react";

type Props = {
  photos: string[];
  onClose: () => void;
};

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: beige;
  border-radius: 8px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 500px;
  height: 100%;
`;

// 현재 보고 있는 사진 큰화면으로
const CurrentPhoto = styled.div`
  width: 80%;
  height: 70%;
  border: 1px solid #ddd;
  background-color: white;
  margin: 16px 0;
  padding: 16px;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;

  img {
    width: 100%;
    height: 85%;
  }
`;
// 사진 리스트
const PhotoList = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  width: 80%;
  height: 120px;
  box-sizing: border-box;
  overflow-x: auto;
  background: #3d3939; /* 필름 배경 */
  border-radius: 8px;
  border: 1px solid #444;
  margin-bottom: 1rem;

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

const LoadingStyle = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.8);
  z-index: 1000;
`;

const Gallery = ({ photos, onClose }: Props) => {
  const [remaining, setRemaining] = useState(photos.length);
  useEffect(() => setRemaining(photos.length), [photos]);

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
        <Content>
          <CurrentPhoto>
            <img src="/photos/photo_1.jpg" alt="current photo"></img>
          </CurrentPhoto>
          <PhotoList>
            {photos.map((photoUrl, index) => (
              <PhotoListItem key={index} url={photoUrl} />
            ))}
          </PhotoList>
          <button onClick={onClose}>닫기</button>
        </Content>
      )}
    </Overlay>
  );
};

export default Gallery;
