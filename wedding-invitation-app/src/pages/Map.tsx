import { useEffect } from "react";
import { createGame } from "../game/main";
import Gallery from "../components/Gallery";
import { useGameUIStore } from "../stores/useGameUIStore";
import HUD from "../components/HUD";
import styled from "styled-components";

const Map = () => {
  const { galleryOpen } = useGameUIStore();

  useEffect(() => {
    const game = createGame();

    return () => {
      game.destroy(true);
    };
  }, []);

  return (
    <Wrapper>
      <div
        id="phaser-game"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
        }}
      />
      <HUD />
      {galleryOpen && (
        <Gallery
          onClose={() => useGameUIStore.setState({ galleryOpen: false })}
        />
      )}
    </Wrapper>
  );
};

export default Map;

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  max-width: 600px;
  max-height: 800px;
  margin: 0 auto;
  overflow: hidden;
`;
