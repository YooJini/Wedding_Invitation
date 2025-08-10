import Phaser from "phaser";
import PreloaderScene from "./scenes/PreloaderScene";
import OutdoorScene from "./scenes/OutdoorScene";

export const createGame = () => {
  const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    parent: "phaser-game",
    scale: {
      width: window.innerWidth,
      height: window.innerHeight,
      autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
    },
    physics: {
      default: "arcade",
    },
    scene: [PreloaderScene, OutdoorScene],
  };

  return new Phaser.Game(config);
};
