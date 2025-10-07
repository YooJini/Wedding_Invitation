import Phaser from "phaser";

export default class HallScene extends Phaser.Scene {
  private player!: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;

  constructor() {
    super("HallScene");
  }

  create() {
    // ...맵 및 타일셋 생성...

    // 플레이어 생성 및 상태 복원
    this.player = this.physics.add.sprite(
      100, // 예시 시작 위치 X
      100, // 예시 시작 위치 Y
      "player"
    );

    // 기존 OutdoorScene과 동일한 설정 적용
    this.player.body.setSize(8, 32, true);
    this.player.setOffset(16, 32);
    this.player.setCollideWorldBounds(true);

    // ...카메라, 충돌 등 추가 설정...
  }
}
