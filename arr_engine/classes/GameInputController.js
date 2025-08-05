export class GameInputController {
  constructor() {
    this._keys = new Set();

    document.addEventListener("keydown", (e) => {
      this._keys.add(e.key);
    });

    document.addEventListener("keyup", (e) => {
      this._keys.delete(e.key);
    });
  }

  isKeyDown(key) {
    return this._keys.has(key);
  }
}
