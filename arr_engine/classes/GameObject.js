/**
 * GameObject
 *
 * Base class for all game entities in ARR Engine.
 * Every object that needs to be updated or rendered on the canvas
 * should extend this class.
 *
 * Lifecycle Methods:
 * - `start()`: Called once when the object is added to the game
 * - `update(dt)`: Called every frame, used for logic updates
 * - `draw(ctx)`: Called every frame, used for rendering the object
 *
 * Usage:
 * Extend this class to create custom game objects, e.g.:
 *
 * ```js
 * class Player extends GameObject {
 *   update(dt) { this.x += 100 * dt; }
 *   draw(ctx) { ctx.fillRect(this.x, this.y, 50, 50); }
 * }
 * ```
 *
 * Notes:
 * - Positioning is built-in (`x`, `y`)
 * - Lifecycle control is handled by `GameInstance`
 * - This class does not assume physics or collisions — extend it as needed
 */
export class GameObject {
  constructor(name = "", tag = "", x = 0, y = 0, width = 50, height = 50) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.name = name;
    this.tag = tag;
    this.isActive = true;
    this.cameraChild = false;
  }

  start() {}

  update(dt) {}

  draw(ctx) {}
}
