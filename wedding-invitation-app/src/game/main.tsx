import Phaser from "phaser";
import OutdoorScene from "./scenes/OutdoorScene";

const config = {
  type: Phaser.AUTO,
  parent: "phaser-game",
  width: window.innerWidth,
  height: window.innerHeight,
  mode: Phaser.Scale.RESIZE,
  autoCenter: Phaser.Scale.CENTER_BOTH,
  physics: {
    default: "arcade",
  },
  scene: [OutdoorScene],
};

export default new Phaser.Game(config);
