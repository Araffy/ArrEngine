export class GameInputController {
  constructor() {
    this._callbacks = {};
    document.addEventListener("keydown", (e) => {
      if (this._callbacks[e.key]) {
        this._callbacks[e.key]();
      }
    });
  }

  handleInput(key, callback) {
    this._callbacks[key] = callback;
  }
}
