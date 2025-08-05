import { GameObject } from "../classes/GameObject.js";

export class SpriteObject extends GameObject {
  constructor(x, y, sprite) {
    super(x, y);
    this.sprite = sprite;
  }

  draw(ctx) {
    if (this.sprite && this.sprite._loaded) {
      this.sprite.drawFrame(
        ctx,
        0,
        0,
        this.sprite.width,
        this.sprite.height,
        this.x,
        this.y,
        this.sprite.width,
        this.sprite.height
      );
    }
  }
}
