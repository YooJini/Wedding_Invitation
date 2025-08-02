import Phaser from "phaser";

export default class OutdoorScene extends Phaser.Scene {
  constructor() {
    super("OutdoorScene");
  }

  preload() {
    this.load.image("tiles_city_props", "/tilesets/3_City_Props_16x16.png");
    this.load.image("tiles_villa", "/tilesets/7_Villas_16x16.png");
    this.load.tilemapTiledJSON("map", "/maps/outdoor.json");
  }

  create() {
    const map = this.make.tilemap({ key: "map" });
    const tileset_city = map.addTilesetImage("City_Props", "tiles_city_props");
    const tileset_villa = map.addTilesetImage("villa", "tiles_villa");
    if (tileset_city) {
      map.createLayer("background", tileset_city);
    }
    if (tileset_villa) {
      map.createLayer("object_0", tileset_villa);
    }

    this.cameras.main.roundPixels = true;

    // 타일셋 텍스처 필터 모드 설정
    this.textures
      .get("tilesetKey")
      ?.setFilter(Phaser.Textures.FilterMode.NEAREST);
  }
}
