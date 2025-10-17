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
    this.load.image("tiles_city_props", "/tilesets/3_City_Props_32x32.png");
    this.load.image("tiles_villa", "/tilesets/7_Villas_32x32.png");
    this.load.image("tiles_vehicles", "/tilesets/10_Vehicles_32x32.png");
    this.load.image(
      "tiles_kitchen",
      "/tilesets/12_Kitchen_Shadowless_32x32.png"
    );
    this.load.image(
      "tiles_birthday_party",
      "/tilesets/10_Birthday_party_Shadowless_32x32.png"
    );
    this.load.image(
      "tiles_clothing_store",
      "/tilesets/21_Clothing_Store_Shadowless_32x32.png"
    );
    this.load.image("tiles_camping", "/tilesets/11_Camping_32x32.png");
    this.load.image(
      "tiles_icecream",
      "/tilesets/24_Ice_Cream_Shop_Shadowless_32x32.png"
    );
    this.load.image(
      "tiles_grocery",
      "/tilesets/16_Grocery_store_Shadowless_32x32.png"
    );

    this.load.image("tiles_candle", "/tilesets/animated_wall_candle_32x32.png");
    this.load.image("tiles_jini", "/tilesets/jini.png");
    this.load.image("tiles_hyunsang", "/tilesets/hyunsang.png");

    this.load.tilemapTiledJSON("map", "/maps/outdoor.json");
    this.load.tilemapTiledJSON("map_hall", "/maps/hall.json");

    this.load.spritesheet("player", "/sprites/player.png", {
      frameWidth: 32,
      frameHeight: 64,
    });
    this.load.on("complete", () => {
      progressBar.destroy();
      progressBox.destroy();
    });
  }

  create() {
    this.scene.start("OutdoorScene");
  }
}
