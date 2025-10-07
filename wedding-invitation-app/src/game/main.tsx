import Phaser from "phaser";
import PreloaderScene from "./scenes/PreloaderScene";
import OutdoorScene from "./scenes/OutdoorScene";
import HallScene from "./scenes/HallScene";

export const createGame = () => {
  const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    backgroundColor: "#ffffff",
    parent: "phaser-game",
    physics: {
      default: "arcade",
    },
    scale: {
      width: "100%",
      height: "100%",
      mode: Phaser.Scale.FIT,
    },

    render: {
      pixelArt: true,
      roundPixels: true,
    },
    scene: [PreloaderScene, OutdoorScene, HallScene],
  };

  return new Phaser.Game(config);
};
