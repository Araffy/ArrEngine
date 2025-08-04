import ARR from "./arr_engine/arr_engine.js";

const canvas = document.getElementById("game-canvas");
const game = new ARR.GameInstance(canvas);

game.init();

let greenCircle = { x: 150, y: 100, radius: 50, color: "green" };

game.gameLoop.update((dt) => {
  game.gameWindow.clear();

  game.gameWindow.drawCircle(
    greenCircle.x,
    greenCircle.y,
    greenCircle.radius,
    greenCircle.color
  );
});

game.gameWindow.gameInputController.handleInput("ArrowRight", () => {
  greenCircle.x += 5; // move right
});
