# 🎮 ARR Engine

A lightweight, modular 2D game engine written in modern JavaScript using ES6 modules — inspired by Unity's architecture.

---

## ✨ Features

- 🔁 Game loop with `deltaTime` support
- 🧱 Modular architecture (GameInstance, GameLoop, GameWindow, Input, Sprites)
- ⌨️ Keyboard input handling
- 🖼️ Canvas-based rendering
- 📦 ES6 module support (clean, importable structure)
- ⚡ Instant bootstrapping via `GameInstance`
- 🚀 Built with simplicity and extendability in mind

---

## 📁 Folder Structure

```
project/
│
├── index.html               # The main HTML file
├── main.js                  # Entry point for game logic
└── arr_engine/
    ├── arr_engine.js        # Single import module (exports full engine API)
    └── classes/
        ├── GameLoop.js
        ├── GameInputController.js
        ├── GameWindow.js
        ├── GameInstance.js
        └── Sprite.js
```

---

## 🚀 Getting Started

### 1. Clone or download the repo.

### 2. Serve the project locally (required for ES6 modules to work):

#### Option A: With Python

```bash
python -m http.server 3000
```

#### Option B: With Node.js

```bash
npm install -g serve
serve .
```

#### Option C: With VS Code Live Server

- Install the Live Server extension
- Right-click `index.html` → "Open with Live Server"

### 3. Open your browser at:

```
http://localhost:3000
```

---

## 🔧 Usage Example

### `main.js`

```js
import { GameInstance } from "./arr_engine/arr_engine.js";

const canvas = document.getElementById("game-canvas");
const game = new GameInstance(canvas);
game.init();
```

### index.html

```html
<canvas id="game-canvas" width="500" height="500"></canvas>
<script type="module" src="main.js"></script>
```

Joke around, have fun and try it out. Think of this setup as a fun sandbox to play around.

---

## 🛠️ Architecture Overview

| Component             | Responsibility                              |
| --------------------- | ------------------------------------------- |
| `GameInstance`        | Core game manager, initializes the engine   |
| `GameLoop`            | Runs the frame loop, calculates `deltaTime` |
| `GameWindow`          | Handles canvas and rendering                |
| `GameInputController` | Handles keyboard input                      |
| `Sprite`              | Loads and draws image assets                |

---

## 📌 Planned Features

- `GameObject` system (with transform, update, draw hooks)
- `SceneManager` to switch game states
- Collision detection (AABB / circle)
- Spritesheet animation
- Asset loader for images & sounds
- Custom event system
- Physics integration (optional)

---

## 📄 License

MIT — Free to use and modify.

---

## 🙌 Credits

Created from scratch without docs — just imagination and inspiration from Unity.
Designed to be understandable, hackable, and yours to build upon.

Currently not in development as a standalone package, but maybe in the near future.
I’ve been on a break for about 2 years, and decided to give it another go.
Still figuring out the best direction to take things, but I hope you enjoy what’s here.
I’ll try to document everything as I go.
