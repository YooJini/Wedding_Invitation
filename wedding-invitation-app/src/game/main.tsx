import Phaser from "phaser";
import OutdoorScene from "./scenes/OutdoorScene";

const config = {
  type: Phaser.AUTO,
  parent: "phaser-game",
  width: 400,
  height: 850,
  physics: {
    default: "arcade",
  },
  scene: [OutdoorScene],
};

export default new Phaser.Game(config);
