import Phaser from "phaser";
import { openGallery, openInvitation } from "../../stores/useGameUIStore";
import { useTooltipStore } from "../../stores/useTooltipStore";
import { worldToScreen } from "../utils/phaserUtils";
import { PlayerController } from "../controllers/PlayerController";

type TriggerObj = {
  name: string;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
};

export default class OutdoorScene extends Phaser.Scene {
  private initialPlayerPos?: { x: number; y: number } | null = null;

  init(data?: { playerX?: number; playerY?: number }) {
    this.initialPlayerPos = data
      ? { x: data.playerX ?? 0, y: data.playerY ?? 0 }
      : null;
  }

  constructor() {
    super("OutdoorScene");
  }

  private player!: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
  private triggerObjs: TriggerObj[] = [];
  private activeTrigger: TriggerObj | null = null;
  private playerController!: PlayerController;

  create() {
    // 카메라 설정
    const cam = this.cameras.main;
    cam.setBackgroundColor("#ffffffff");
    cam.setRoundPixels(true);
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
    const tileset_jini = map.addTilesetImage("jini", "tiles_jini");
    const tileset_hyunsang = map.addTilesetImage("hyunsang", "tiles_hyunsang");

    // 레이어 생성 전 타일셋 체크
    if (
      !(
        tileset_city &&
        tileset_villa &&
        tileset_vehicles &&
        tileset_kitchen &&
        tileset_birthday_party &&
        tileset_clothing_store &&
        tileset_camping &&
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
    const objectLayer = map.createLayer("object_0", [
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
    map.createLayer("npc", [tileset_jini, tileset_hyunsang]);
    map.createLayer("deco", tileset_birthday_party);

    // 플레이어 생성 (이전 씬에서 전달된 좌표가 있으면 사용)
    const startX =
      this.initialPlayerPos && this.initialPlayerPos.x !== 0
        ? this.initialPlayerPos.x
        : 220;
    const startY =
      this.initialPlayerPos && this.initialPlayerPos.y !== 0
        ? this.initialPlayerPos.y
        : 700;
    this.player = this.physics.add.sprite(startX, startY, "player", 19);
    this.physics.world.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    this.player.setCollideWorldBounds(true);

    this.playerController = new PlayerController(this.player);
    this.playerController.setup();

    // 레이어 충돌 설정
    if (objectLayer === null) {
      console.error("objectLayer_0 is null, cannot set collisions.");
      return;
    }

    objectLayer.setCollisionByProperty({ collides: true });
    this.physics.add.collider(this.player, objectLayer);

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

  applyVerticalFit() {
    const { height } = this.scale.gameSize;
    const cam = this.cameras.main;

    // 세로 기준 고정: 세로가 항상 BASE_H 만큼 보이도록 줌 계산
    const zoom = height / 768;
    cam.setZoom(zoom);

    cam.startFollow(this.player, true, 0.1, 0.1);
  }

  // 트리거 이벤트
  handleTriggerEvent(triggerName: string) {
    const { x, y } = worldToScreen(this, this.player.x, this.player.y - 40);

    switch (triggerName) {
      case "door":
        this.scene.start("HallScene");
        break;
      case "photo":
        useTooltipStore.getState().showTooltip({
          text: "신랑, 신부 보고 가세요! 📸",
          x,
          y,
          onConfirm: () => {
            openGallery();
          },
        });
        break;
      case "coffee":
        // 예시: 툴팁 노출 (플레이어 위치 기준)
        useTooltipStore.getState().showTooltip({
          text: "신랑 신부는 떨고 있겠지만.. 여러분은 여유롭게 한 잔 어떠세요? 😂 두 잔, 세 잔 드시면 더 좋아요 맘껏 드세요! ☕",
          x,
          y, // 플레이어 위쪽에 표시
        });
        break;
      case "npc":
        useTooltipStore.getState().showTooltip({
          text: "저희의 결혼식에 와주셔서 진심으로 감사드립니다 💛",
          x,
          y,
        });
        break;
      case "notice":
        useTooltipStore.getState().showTooltip({
          text: "📢 공지사항\n두 사람이 드디어 결혼합니다.\n자세한 내용은 초대장에서 확인해주세요 💌 ",
          x,
          y,
          onConfirm: () => {
            openInvitation();
          },
        });
        break;
      // ...etc
      default:
        useTooltipStore.getState().hideTooltip();
        break;
    }
  }
}
