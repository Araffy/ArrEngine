export class GameWindow {
  constructor(gameLoop, gameInputController, canvas) {
    this._canvas = canvas;
    this._context = this._canvas.getContext("2d");
    this._width = this._canvas.width;
    this._height = this._canvas.height;
    this._gameLoop = gameLoop;
    this._gameInputController = gameInputController;
  }

  get gameInputController() {
    return this._gameInputController;
  }

  drawCircle(x, y, radius, color) {
    this._context.fillStyle = color;
    this._context.beginPath();
    this._context.arc(x, y, radius, 0, Math.PI * 2);
    this._context.fill();
  }

  drawSprite(sprite, x, y) {
    this._context.drawImage(sprite.image, x, y);
  }

  clear() {
    this._context.clearRect(0, 0, this._width, this._height);
  }
}
