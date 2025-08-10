import Phaser from "phaser";

export default class OutdoorScene extends Phaser.Scene {
  constructor() {
    super("OutdoorScene");
  }

  create() {
    const map = this.make.tilemap({ key: "map" });
    const tileset_city = map.addTilesetImage(
      "City_Props_32",
      "tiles_city_props"
    );
    // const tileset_jini = map.addTilesetImage("jini", "tiles_jini");
    // const tileset_hyunsang = map.addTilesetImage("hyunsang", "tiles_hyunsang");
    const tileset_villa = map.addTilesetImage("Villas_32", "tiles_villa");

    if (tileset_city) {
      map.createLayer("background", tileset_city);
    }
    if (tileset_villa) {
      map.createLayer("object_0", tileset_villa);
    }

    // if (tileset_jini && tileset_hyunsang) {
    //   map.createLayer("npc", [tileset_jini, tileset_hyunsang]);
    // }

    this.cameras.main.roundPixels = true;

    // 타일셋 텍스처 필터 모드 설정
    // this.textures
    //   .get("tilesetKey")
    //   ?.setFilter(Phaser.Textures.FilterMode.NEAREST);
  }
}
