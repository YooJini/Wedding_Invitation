import Phaser from "phaser";

export default class OutdoorScene extends Phaser.Scene {
  constructor() {
    super("OutdoorScene");
  }

  private player!: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;

  create() {
    // 카메라 설정
    const cam = this.cameras.main;
    cam.setBackgroundColor("#ffffffff");
    cam.fadeOut(0);

    // 타일맵 생성
    const map = this.make.tilemap({ key: "map" });

    // 타일셋 추가
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

    // 레이어 생성 전 타일셋 체크
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

    // 레이어 생성
    map.createLayer("background", tileset_city);
    const objectLayer_0 = map.createLayer("object_0", [
      tileset_villa,
      tileset_vehicles,
      tileset_kitchen,
      tileset_camping,
    ]);
    map.createLayer("object_1", [
      tileset_clothing_store,
      tileset_vehicles,
      tileset_villa,
    ]);
    map.createLayer("tree", tileset_camping);
    map.createLayer("deco", tileset_birthday_party);

    // 플레이어 생성
    this.player = this.physics.add.sprite(220, 700, "player", 19);
    this.player.body.setSize(8, 32, true);
    this.player.setOffset(0, 32);
    this.player.setCollideWorldBounds(true);

    // 레이어 충돌 설정
    if (objectLayer_0 === null) {
      console.error("objectLayer_0 is null, cannot set collisions.");
      return;
    }

    objectLayer_0.setCollisionByProperty({ collides: true });
    this.physics.add.collider(this.player, objectLayer_0);

    // 인풋 설정 (키보드)
    if (this.input.keyboard) {
      this.cursors = this.input.keyboard.createCursorKeys();
    } else {
      throw new Error("Keyboard input is not available.");
    }

    // 맵 생성 후 카메라 설정
    cam.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    this.applyVerticalFit();

    // this.scale.on("resize", this.applyVerticalFit, this);

    cam.fadeIn(200);
  }

  update() {
    if (!this.cursors) return;

    if (this.cursors.left.isDown) {
      console.log("left");
      this.player.setVelocityX(-200);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(200);
    } else if (this.cursors.up.isDown) {
      this.player.setVelocityY(-200);
    } else if (this.cursors.down.isDown) {
      this.player.setVelocityY(200);
    } else {
      this.player.setVelocityX(0);
      this.player.setVelocityY(0);
    }
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
