import Phaser from "phaser";
import { PlayerController } from "../controllers/PlayerController";
import { useTooltipStore } from "../../stores/useTooltipStore";
import { openProgram } from "../../stores/useGameUIStore";
import { worldToScreen } from "../../utils/phaserUtils";

type TriggerObj = {
  name: string;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
};

export default class HallScene extends Phaser.Scene {
  constructor() {
    super("HallScene");
  }

  private player!: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
  private playerController!: PlayerController;
  private triggerObjs: TriggerObj[] = [];
  private activeTrigger: TriggerObj | null = null;

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

    // 타일 좌표 → 월드 좌표로 변환해 트리거 목록 구성
    const triggerLayer = map.getObjectLayer("trigger");
    this.triggerObjs = (triggerLayer?.objects ?? []).map((obj) => {
      const name = obj.name;
      const startX = obj.x ?? 0;
      const startY = obj.y ?? 0;
      const endX = (obj.x ?? 0) + (obj.width ?? 0);
      const endY = (obj.y ?? 0) + (obj.height ?? 0);
      return { name, startX, startY, endX, endY };
    });

    // 기존 OutdoorScene과 동일한 설정 적용
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

    // 트리거 체크
    const playerX = this.player.x;
    const playerY = this.player.y;
    const triggered = this.triggerObjs.find(
      (trigger) =>
        playerX >= trigger.startX &&
        playerX <= trigger.endX &&
        playerY >= trigger.startY &&
        playerY <= trigger.endY
    );
    if (triggered) {
      if (this.activeTrigger?.name !== triggered.name) {
        this.handleTriggerEvent(triggered.name);
        this.activeTrigger = triggered;
      }
    } else {
      if (this.activeTrigger) {
        console.log(`Exited trigger: ${this.activeTrigger.name}`);
        this.activeTrigger = null;
        useTooltipStore.getState().hideTooltip();
      }
    }
  }
  applyVerticalFit = () => {
    const { height } = this.scale.gameSize;
    const cam = this.cameras.main;

    // 세로 기준 고정: 세로가 항상 BASE_H 만큼 보이도록 줌 계산
    const zoom = height / 768;
    cam.setZoom(zoom);

    cam.startFollow(this.player, true, 0.1, 0.1);
  };

  // 트리거 이벤트
  handleTriggerEvent(triggerName: string) {
    const { x, y } = worldToScreen(this, this.player.x, this.player.y - 20);
    switch (triggerName) {
      case "exit":
        // 현재 플레이어 위치(또는 원하는 스폰 지점)를 OutdoorScene으로 전달
        this.scene.start("OutdoorScene", {
          playerX: 220,
          playerY: 300,
        });
        break;
      case "program":
        useTooltipStore.getState().showTooltip({
          text: "끝까지 오셨군요! 👏\n감사와 축하의 의미로 식순 스포합니다 (안물안궁주의..😁)",
          x,
          y,
          onConfirm: () => {
            openProgram();
          },
        });
    }
  }
}
