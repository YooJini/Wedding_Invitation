import Phaser from "phaser";
import PreloaderScene from "./scenes/PreloaderScene";
import OutdoorScene from "./scenes/OutdoorScene";

export const createGame = () => {
  const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    backgroundColor: "#ffffff",
    parent: "phaser-game",
    scale: {
      width: "100%",
      height: "100%",
      mode: Phaser.Scale.FIT,
    },

    render: {
      pixelArt: true,
      roundPixels: true,
    },
    scene: [PreloaderScene, OutdoorScene],
  };

  return new Phaser.Game(config);
};
