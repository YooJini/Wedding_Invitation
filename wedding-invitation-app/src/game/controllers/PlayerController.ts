import Phaser from "phaser";

export class PlayerController {
  private scene: Phaser.Scene;
  private player: Phaser.Physics.Arcade.Sprite;

  constructor(scene: Phaser.Scene, player: Phaser.Physics.Arcade.Sprite) {
    this.scene = scene;
    this.player = player;
  }

  setup() {
    // body, offset, depth, etc
    if (this.player.body) {
      this.player.body.setSize(8, 32, true);
    }
    this.player.setOffset(16, 32);
    this.player.setDepth(10);

    // ...etc
  }

  handleMovement(cursors: Phaser.Types.Input.Keyboard.CursorKeys) {
    // 이동 및 애니메이션 처리
    if (!cursors) return;

    // 플레이어 이동
    if (cursors.left.isDown) {
      this.player.setVelocityX(-200);
    } else if (cursors.right.isDown) {
      this.player.setVelocityX(200);
    } else if (cursors.up.isDown) {
      this.player.setVelocityY(-200);
    } else if (cursors.down.isDown) {
      this.player.setVelocityY(200);
    } else {
      this.player.setVelocityX(0);
      this.player.setVelocityY(0);
    }
  }

  // 기타 공통 메서드
}
