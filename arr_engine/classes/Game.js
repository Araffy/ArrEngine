class GameInstance {
    constructor() {
        this._gameLoop = new GameLoop();
        this._gameInputController = new GameInputController();
        this._gameWindow = new GameWindow(this._gameLoop, this._gameInputController);

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

