import { GameObject } from "../classes/GameObject.js";

export class CameraObject extends GameObject {
  constructor(
    x = 0,
    y = 0,
    followTarget = null,
    canvasWidth = 500,
    canvasHeight = 500
  ) {
    super(x, y);
    this.followTarget = followTarget;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
  }

  apply(ctx) {
    ctx.translate(-this.x, -this.y);
  }

  reset(ctx) {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
  }

  update(dt) {
    if (!this.followTarget) return;

    const deadZoneSize = 50;
    const centerX = this.x + this.canvasWidth / 2;
    const centerY = this.y + this.canvasHeight / 2;

    let dx = 0;
    let dy = 0;

    const target = this.followTarget;

    if (target.x < centerX - deadZoneSize) {
      dx = target.x - (centerX - deadZoneSize);
    } else if (target.x > centerX + deadZoneSize) {
      dx = target.x - (centerX + deadZoneSize);
    }

    if (target.y < centerY - deadZoneSize) {
      dy = target.y - (centerY - deadZoneSize);
    } else if (target.y > centerY + deadZoneSize) {
      dy = target.y - (centerY + deadZoneSize);
    }

    const followSpeed = 3;
    this.x += dx * followSpeed * dt;
    this.y += dy * followSpeed * dt;
  }
}
