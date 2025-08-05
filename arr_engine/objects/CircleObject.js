import { GameObject } from "../classes/GameObject.js";

export class CircleObject extends GameObject {
  constructor(x = 0, y = 0, radius = 25, color = "red") {
    super(x, y, radius * 2, radius * 2);
    this.radius = radius;
    this.color = color;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);

    ctx.fill();
  }
}
