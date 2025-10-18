import { useEffect } from "react";
import { createGame } from "../game/main";
import HUD from "../components/HUD";
import styled from "styled-components";
import ModalSwitch from "../components/ModalSwitch";
import Loading from "../components/Loading";

const Map = () => {
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
      <ModalSwitch />
      <Loading />
    </Wrapper>
  );
};

export default Map;

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  max-width: 600px;
  margin: 0 auto;
  overflow: hidden;
`;
