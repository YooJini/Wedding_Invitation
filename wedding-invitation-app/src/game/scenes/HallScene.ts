import Phaser from "phaser";
import { PlayerController } from "../controllers/PlayerController";

export default class HallScene extends Phaser.Scene {
  constructor() {
    super("HallScene");
  }

  private player!: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
  private playerController!: PlayerController;

  create() {
    // 카메라 설정
    const cam = this.cameras.main;
    cam.setBackgroundColor("#ffffffff");
    cam.fadeOut(0);

    // ...맵 및 타일셋 생성...
    // 타일맵 생성
    const map = this.make.tilemap({ key: "map_hall" });

    // 타일셋 추가
    const tileset_city = map.addTilesetImage(
      "City_Props_32",
      "tiles_city_props"
    );
    const tileset_grocery = map.addTilesetImage(
      "Grocery_store_32",
      "tiles_grocery"
    );
    const tileset_icecream = map.addTilesetImage(
      "Ice_Cream_Shop_32",
      "tiles_icecream"
    );
    const tileset_candle = map.addTilesetImage(
      "animated_wall_candle_32x32",
      "tiles_candle"
    );
    const tileset_jini = map.addTilesetImage("jini", "tiles_jini");
    const tileset_hyunsang = map.addTilesetImage("hyunsang", "tiles_hyunsang");

    // 플레이어 생성
    this.player = this.physics.add.sprite(220, 700, "player", 19);
    this.physics.world.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    this.player.setCollideWorldBounds(true);

    this.playerController = new PlayerController(this.player);
    this.playerController.setup();

    // 레이어 생성 전 타일셋 체크
    if (
      !(
        tileset_city &&
        tileset_grocery &&
        tileset_icecream &&
        tileset_candle &&
        tileset_jini &&
        tileset_hyunsang
      )
    ) {
      console.warn(
        "Some tilesets are missing, outdoor scene may not render correctly."
      );
      return;
    }

    // 레이어 생성
    map.createLayer("background", tileset_city);
    map.createLayer("object_0", [
      tileset_grocery,
      tileset_icecream,
      tileset_candle,
    ]);
    map.createLayer("object_1", [tileset_grocery]);
    map.createLayer("npc", [tileset_jini, tileset_hyunsang]);

    // 기존 OutdoorScene과 동일한 설정 적용
    this.player.body.setSize(8, 32, true);
    this.player.setOffset(16, 32);
    this.physics.world.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    this.player.setCollideWorldBounds(true);
    this.player.setDepth(10);
    // ...카메라, 충돌 등 추가 설정...
    // 맵 생성 후 카메라 설정
    cam.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

    this.applyVerticalFit();
    cam.fadeIn(200);
  }

  update() {
    this.playerController.handleMovement();
  }
  applyVerticalFit = () => {
    const { height } = this.scale.gameSize;
    const cam = this.cameras.main;

    // 세로 기준 고정: 세로가 항상 BASE_H 만큼 보이도록 줌 계산
    const zoom = height / 768;
    cam.setZoom(zoom);

    cam.startFollow(this.player, true, 0.1, 0.1);
  };
}
