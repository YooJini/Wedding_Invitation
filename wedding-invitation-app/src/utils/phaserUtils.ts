export function worldToScreen(scene: Phaser.Scene, x: number, y: number) {
  const cam = scene.cameras.main;
  return {
    x: (x - cam.worldView.x) * cam.zoom,
    y: (y - cam.worldView.y) * cam.zoom,
  };
}
