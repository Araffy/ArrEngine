class GameInputController {
    constructor() {
        this._callback = null;
    }

    handleInput(key, callback) {
        document.addEventListener("keydown", (e) => {
            if (e.key === key) {
                this._callback = callback;
                this._callback();
            }
        });
    }
}