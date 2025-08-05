/**
 * GameWindow
 *
 * This class is part of the ARR Engine. It provides a canvas rendering context
 * and utility methods for drawing UI elements and custom graphics.
 *
 * Responsibilities:
 * - Manage the canvas context for rendering
 * - Provide utility methods (e.g. drawCircle, drawSprite, clear)
 * - Handle UI-layer drawing (menus, overlays, debug visuals)
 *
 * Note:
 * This class is **not** intended for game objects (use GameObject for that).
 * GameWindow is primarily for static or overlay drawing, HUD elements, or
 * quick rendering outside the object lifecycle.
 *
 * Constructed with references to:
 * - GameLoop: to sync rendering with the game loop
 * - GameInputController: to enable UI-related input (if needed)
 */
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

  drawRect(x, y, w, h, color = "rgba(255,0,0,0.3)") {
    this._context.fillStyle = color;
    this._context.fillRect(x, y, w, h);
  }

  clear() {
    this._context.clearRect(0, 0, this._width, this._height);
  }
}
