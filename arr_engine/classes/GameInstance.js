import { GameInputController } from "./GameInputController.js";
import { GameLoop } from "./GameLoop.js";
import { GameWindow } from "./GameWindow.js";

export class GameInstance {
  constructor(canvas) {
    this._gameLoop = new GameLoop();
    this._gameInputController = new GameInputController();
    this._gameWindow = new GameWindow(
      this._gameLoop,
      this._gameInputController,
      canvas
    );
  }

  get gameWindow() {
    return this._gameWindow;
  }

  get gameLoop() {
    return this._gameLoop;
  }

  init() {
    this._gameLoop.awake(() => {
      console.log("Game initialized and ready to run.");
    });
  }
}
