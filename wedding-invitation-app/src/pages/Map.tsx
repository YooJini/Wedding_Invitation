import { useEffect } from "react";
import { createGame } from "../game/main";

const Map = () => {
  useEffect(() => {
    const game = createGame();

    return () => {
      game.destroy(true);
    };
  }, []);

  return <div id="phaser-game" />;
};

export default Map;
