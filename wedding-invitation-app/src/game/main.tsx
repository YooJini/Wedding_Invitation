import Phaser from "phaser";
import PreloaderScene from "./scenes/PreloaderScene";
import OutdoorScene from "./scenes/OutdoorScene";

export const createGame = () => {
  const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    backgroundColor: "#000",
    parent: "phaser-game",
    scale: {
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
