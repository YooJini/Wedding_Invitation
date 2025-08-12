import Phaser from "phaser";

export default class OutdoorScene extends Phaser.Scene {
  constructor() {
    super("OutdoorScene");
  }

  create() {
    const cam = this.cameras.main;
    cam.setBackgroundColor("#ffffffff");
    cam.fadeOut(0);

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
      map.createLayer("tree", tileset_villa);
    }

    cam.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    this.applyVerticalFit();
    // this.scale.on("resize", this.applyVerticalFit, this);

    cam.fadeIn(200);
    // if (tileset_jini && tileset_hyunsang) {
    //   map.createLayer("npc", [tileset_jini, tileset_hyunsang]);
    // }
  }

  applyVerticalFit = () => {
    const { width, height } = this.scale.gameSize;
    const cam = this.cameras.main;

    // 세로 기준 고정: 세로가 항상 BASE_H 만큼 보이도록 줌 계산
    const zoom = height / 768;
    cam.setZoom(zoom);

    // 중앙 기준(또는 플레이어를 따라가면 startFollow 사용)
    // cam.centerOn(432 / 2, 768 / 2);
  };
}
