import ARR from "./arr_engine/arr_engine.js";
import { Sprite } from "./arr_engine/classes/Sprite.js";
import { SpriteObject } from "./arr_engine/objects/SpriteObject.js";
import { CameraObject } from "./arr_engine/objects/CameraObject.js";
import { CircleObject } from "./arr_engine/objects/CircleObject.js";

const canvas = document.getElementById("game-canvas");
const game = new ARR.GameInstance(canvas);

const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

game.init();

const sprite = new Sprite("assets/bird.png");
const player = new SpriteObject(100, 100, sprite);
const camera = new CameraObject(0, 0, player, canvasWidth, canvasHeight);

game.addObject(player);
game.addObject(camera);
game.setCamera(camera);

const circle = new CircleObject(250, 100, 15, "green");

game.addObject(circle);

player.update = function (dt) {
  const speed = 200;
  const input = game.gameInputController;

  let dx = 0;
  let dy = 0;

  if (input.isKeyDown("ArrowRight")) dx += 1;
  if (input.isKeyDown("ArrowLeft")) dx -= 1;
  if (input.isKeyDown("ArrowDown")) dy += 1;
  if (input.isKeyDown("ArrowUp")) dy -= 1;

  if (dx !== 0 && dy !== 0) {
    const factor = Math.SQRT1_2;
    dx *= factor;
    dy *= factor;
  }

  this.x += dx * speed * dt;
  this.y += dy * speed * dt;
};
