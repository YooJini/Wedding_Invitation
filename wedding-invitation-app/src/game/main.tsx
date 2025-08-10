import Phaser from "phaser";
import PreloaderScene from "./scenes/PreloaderScene";
import OutdoorScene from "./scenes/OutdoorScene";

export const createGame = () => {
  const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    parent: "phaser-game",
    scale: {
      width: 576,
      height: 992,
    },
    physics: {
      default: "arcade",
    },
    scene: [PreloaderScene, OutdoorScene],
  };

  return new Phaser.Game(config);
};
