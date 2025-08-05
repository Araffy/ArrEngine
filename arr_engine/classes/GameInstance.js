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
    this._objects = [];
    this._camera = null;
  }

  setCamera(camera) {
    this._camera = camera;
  }

  addObject(obj) {
    this._objects.push(obj);
    if (!obj.started) {
      obj.start();
      obj.started = true;
    }
  }

  init() {
    this._gameLoop.awake(() => {
      console.log("Game initialized and ready to run.");
    });

    this._gameLoop.update((dt) => this.update(dt));
  }

  update(dt) {
    const ctx = this._gameWindow._context;

    this._gameWindow.clear();

    if (this._camera) {
      this._camera.apply(ctx);
    }

    this._objects.forEach((obj) => {
      if (!obj.cameraChild) {
        obj.update(dt);
        obj.draw(ctx);
      }
    });

    if (this._camera) {
      this._camera.reset(ctx);
    }

    this._objects.forEach((obj) => {
      if (obj.cameraChild) {
        obj.update(dt);
        obj.draw(ctx);
      }
    });
  }

  get gameWindow() {
    return this._gameWindow;
  }

  get gameLoop() {
    return this._gameLoop;
  }

  get gameInputController() {
    return this._gameInputController;
  }
}
