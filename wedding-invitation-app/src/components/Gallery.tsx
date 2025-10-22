import styled from "styled-components";
import PhotoListItem from "./PhotoListItem";
import Overlay from "./Overlay";
import { useCallback, useMemo, useState } from "react";
import { photoUrls } from "../data";

type Props = {
  onClose: () => void;
};

const Wrapper = styled.div`
  background-color: #f8faeb;
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25em;
`;

// 현재 보고 있는 사진 큰화면으로
const CurrentPhotoContainer = styled.div`
  width: 20em;
  height: 25em;
  border: 1px solid #ddd;
  background-color: white;
  padding: 12px 12px 0 12px;
  box-sizing: border-box;
`;

const CurrentPhoto = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Film = styled.div`
  position: relative;
  width: 20em;
  height: fit-content;
  padding: 1em;
  background: #3b3126f9; /* 필름 배경 */
  border-radius: 8px;
  border: 1px solid #444;
  box-sizing: border-box;
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
      transparent 0 0.3em,
      #fff 0.5em 1em,
      transparent 0.5em 1.5em
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
      transparent 0 0.3em,
      #fff 0.5em 1em,
      transparent 0.5em 1.5em
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
  gap: 1em;
  box-sizing: border-box;
`;

const LoadingStyle = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  z-index: 1000;
`;

const Gallery = ({ onClose }: Props) => {
  const photos = photoUrls;
  const [remaining, setRemaining] = useState(5);
  const [selected, setSelected] = useState(0);

  const onOneDone = useCallback(() => {
    setRemaining((r) => Math.max(0, r - 1));
  }, []);

  const done = remaining === 0;

  const handleSelect = useCallback((index: number) => {
    setSelected(index);
  }, []);

  const currentSrc = useMemo(() => photos[selected], [photos, selected]);

  return (
    <Overlay>
      {!done && (
        <>
          <LoadingStyle>사진 가져오는 중...</LoadingStyle>
          {photos.map((photoUrl, i) => (
            <img key={i} src={photoUrl} onLoad={onOneDone} />
          ))}
        </>
      )}
      {done && (
        <Wrapper>
          <Content>
            <CurrentPhotoContainer>
              <CurrentPhoto>
                <img src={currentSrc} alt="current photo"></img>
              </CurrentPhoto>
            </CurrentPhotoContainer>
            <Film>
              <PhotoList>
                {photos.map((photoUrl, index) => (
                  <PhotoListItem
                    key={index}
                    url={photoUrl}
                    isActive={index === selected}
                    onClick={() => handleSelect(index)}
                  />
                ))}
              </PhotoList>
            </Film>
            <button style={{ fontSize: "1rem" }} onClick={onClose}>
              닫기
            </button>
          </Content>
        </Wrapper>
      )}
    </Overlay>
  );
};

export default Gallery;
