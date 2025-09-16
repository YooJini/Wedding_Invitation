import Phaser from "phaser";

export default class OutdoorScene extends Phaser.Scene {
  constructor() {
    super("OutdoorScene");
  }

  private player!: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;

  create() {
    const cam = this.cameras.main;
    cam.setBackgroundColor("#ffffffff");
    cam.fadeOut(0);

    const map = this.make.tilemap({ key: "map" });
    const tileset_city = map.addTilesetImage(
      "City_Props_32",
      "tiles_city_props"
    );
    const tileset_villa = map.addTilesetImage("Villas_32", "tiles_villa");
    const tileset_vehicles = map.addTilesetImage(
      "Vehicles_32",
      "tiles_vehicles"
    );
    const tileset_kitchen = map.addTilesetImage("Kitchen_32", "tiles_kitchen");
    const tileset_birthday_party = map.addTilesetImage(
      "Birthday_party_32",
      "tiles_birthday_party"
    );
    const tileset_clothing_store = map.addTilesetImage(
      "Clothing_Store_32",
      "tiles_clothing_store"
    );
    const tileset_camping = map.addTilesetImage("Camping_32", "tiles_camping");
    if (
      !(
        tileset_city &&
        tileset_villa &&
        tileset_vehicles &&
        tileset_kitchen &&
        tileset_birthday_party &&
        tileset_clothing_store &&
        tileset_camping
      )
    ) {
      console.warn(
        "Some tilesets are missing, outdoor scene may not render correctly."
      );
      return;
    }

    map.createLayer("background", tileset_city)?.setDepth(0);
    map.createLayer("object_0", [
      tileset_villa,
      tileset_vehicles,
      tileset_kitchen,
    ]);
    map.createLayer("object_1", [tileset_clothing_store, tileset_vehicles]);
    map.createLayer("tree", tileset_villa);
    map.createLayer("deco", tileset_birthday_party);

    this.player = this.physics.add.sprite(220, 700, "player", 19);

    cam.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    this.applyVerticalFit();

    // this.scale.on("resize", this.applyVerticalFit, this);

    cam.fadeIn(200);
  }

  applyVerticalFit = () => {
    const { height } = this.scale.gameSize;
    const cam = this.cameras.main;

    // 세로 기준 고정: 세로가 항상 BASE_H 만큼 보이도록 줌 계산
    const zoom = height / 768;
    cam.setZoom(zoom);

    // 중앙 기준(또는 플레이어를 따라가면 startFollow 사용)
    // cam.centerOn(432 / 2, 768 / 2);
  };
}
