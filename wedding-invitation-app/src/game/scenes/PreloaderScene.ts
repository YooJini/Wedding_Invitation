import Phaser from "phaser";

export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super("PreloaderScene");
  }

  preload() {
    const { width, height } = this.scale;
    const progressBar = this.add.graphics();
    const progressBox = this.add.graphics();
    progressBox.fillStyle(0x345675, 0.8);
    progressBox.fillRect(width / 4, height / 2 - 25, width / 2, 50);

    this.load.on("progress", (value: number) => {
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(width / 4, height / 2 - 25, (width / 2) * value, 50);
    });

    // 리소스 로드
    this.load.image("tiles_city_props", "/tilesets/3_City_Props_16x16.png");
    this.load.image("tiles_villa", "/tilesets/7_Villas_16x16.png");
    this.load.image("tiles_jini", "/tilesets/jini.png");
    this.load.image("tiles_hyunsang", "/tilesets/hyunsang.png");
    this.load.tilemapTiledJSON("map", "/maps/outdoor.json");

    this.load.on("complete", () => {
      progressBar.destroy();
      progressBox.destroy();
    });
  }

  create() {
    this.scene.start("OutdoorScene");
  }
}
