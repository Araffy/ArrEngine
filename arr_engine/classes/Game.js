class GameInstance {
    constructor() {
        this._gameLoop = new GameLoop();
        this._gameWindow = new GameWindow(this._gameLoop);

    }

    get gameWindow() {
        return this._gameWindow;
    }

    get gameLoop() {
        return this._gameLoop;

    }

    init() {
        this._gameLoop.awake(() => {
            console.log("Awake");
        });
    }
}

