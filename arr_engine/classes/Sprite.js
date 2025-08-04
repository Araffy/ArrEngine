export class Sprite {
  constructor(imagePath) {
    this.image = new Image();
    this._loaded = false;

    this.image.onload = () => {
      this._loaded = true;
    };
    this.image.src = imagePath;
  }

  drawFrame(context, sx, sy, sw, sh, dx, dy, dw, dh) {
    if (!this._loaded) return;
    context.drawImage(this.image, sx, sy, sw, sh, dx, dy, dw, dh);
  }

  get width() {
    return this.image.width;
  }
  get height() {
    return this.image.height;
  }
}
