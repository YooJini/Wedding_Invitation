import Phaser from "phaser";
import OutdoorScene from "./scenes/OutdoorScene";

const config = {
  type: Phaser.AUTO,
  parent: "phaser-game",
  width: window.innerWidth,
  height: window.innerHeight,
  mode: Phaser.Scale.RESIZE,
  physics: {
    default: "arcade",
  },
  scene: [OutdoorScene],
};

export default new Phaser.Game(config);
