class GameLoop {
    constructor() {
        this._isRunning = false;
        this._fps = 60;
        this._interval = 1000 / this._fps;
        this._lastTime = 0;
        this._callback = null;
        this._showFps = true;
    }

    awake(callback) {
        this._callback = callback;
        this._callback();
    }

    update(callback) {
        this._isRunning = true;
        this._callback = callback;
        this._lastTime = performance.now();
        this._frame();

        if(this._showFps) {
            var fpsElement = document.createElement("p");
            fpsElement.style.position = "absolute";
            fpsElement.style.left = "0";
            fpsElement.style.top = "0";
            fpsElement.style.color = "red";
            document.body.appendChild(fpsElement);
            
            setInterval(() => {
                fpsElement.innerHTML = Math.round(1000 / this._interval);
            }, 1000);
        }

    }

    stop() {
        this._isRunning = false;
    }        

    _frame() {
        if (!this._isRunning) return;
        requestAnimationFrame((time) => {
            const delta = time - this._lastTime;
            if (delta > this._interval) {
                this._lastTime = time - (delta % this._interval);
                this._callback();
            }
            this._frame();
        });
    }
}