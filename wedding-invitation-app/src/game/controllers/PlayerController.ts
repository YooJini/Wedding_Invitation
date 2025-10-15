import Phaser from "phaser";
import { useGameControllerStore } from "../../stores/useGameControllerStore";

export class PlayerController {
  //   private scene: Phaser.Scene;
  private player: Phaser.Physics.Arcade.Sprite;

  constructor(player: Phaser.Physics.Arcade.Sprite) {
    // this.scene = scene;
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

  handleMovement() {
    const direction = useGameControllerStore.getState().direction;

    // 방향에 따라 이동
    switch (direction) {
      case "left":
        this.player.setVelocityX(-200);
        this.player.setVelocityY(0);
        break;
      case "right":
        this.player.setVelocityX(200);
        this.player.setVelocityY(0);
        break;
      case "up":
        this.player.setVelocityY(-200);
        this.player.setVelocityX(0);
        break;
      case "down":
        this.player.setVelocityY(200);
        this.player.setVelocityX(0);
        break;
      default:
        this.player.setVelocityX(0);
        this.player.setVelocityY(0);
        break;
    }
  }

  // 기타 공통 메서드
}
