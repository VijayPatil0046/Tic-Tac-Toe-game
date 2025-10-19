# Classic Tic Tac Toe Game ❌⭕

A simple, fully functional Tic-Tac-Toe game built using **plain HTML, CSS, and vanilla JavaScript**. It's a quick, two-player experience that requires no external libraries or build steps.

## ✨ Features

* **Standard 3x3 Grid**: Classic Tic-Tac-Toe gameplay.
* **Turn-Based Logic**: Correctly alternates turns between 'O' and 'X'.
* **Win/Draw Detection**: Clearly announces the winner or a draw.
* **New Game/Reset Functionality**: Buttons to start a fresh game at any point.
* **Dark/Light Theme Toggle**: Easily switch the application's theme for comfortable viewing.

---

## 🚀 How to Run Locally

You can get this game running instantly in any modern web browser.

1.  **Clone or Download** the project files to your local machine.
2.  **Open `index.html`**:
    * **Recommended**: If you use **VS Code**, right-click `index.html` and select **"Open with Live Server"** to launch the game with hot-reloading.
    * **Alternative**: Double-click the `index.html` file to open it in your default web browser.

3.  **Play!** Click on the boxes to start placing 'O's and 'X's.

---

## 🛠️ Project Structure

The project is structured simply with three main files:

| File/Folder | Description |
| :--- | :--- |
| `index.html` | The main game layout, including the title, game grid, message container, and buttons. |
| `style.css` | Handles all the styling, layout, and appearance. Includes the `.lightMode` class for the theme toggle. |
| `app.js` | Contains the complete game logic, including turn switching, win condition checking, score/message updates, and theme toggling. |

### Key Logic and Functions

The core functionality is handled in `app.js`:

* **`winningCombinations`**: A constant array defining all 8 possible ways to win the game.
* **Turn Management**: The boolean variable `turnO` manages the current player, switching between `true` (for 'O') and `false` (for 'X').
* **`checkWinner()`**: Iterates through the `winningCombinations` to check if a player has achieved three in a row or if the game is a draw.
* **`showWinner(win)`**: Displays the winning message and disables all grid boxes to end the current game round.
* **`newPlay()`**: Resets the game board, re-enables the boxes, and hides the winner message.
* **Theme Toggle**: Toggles the `lightMode` class on the `<body>` element via the `#mode` button.

---

## 🎨 Styling and Themes

The styles are managed in `style.css`:

* **Dark Mode (Default)**: Uses a dark background (`#272727`) and light text (`white`).
* **Light Mode**: The JavaScript adds the `.lightMode` class to the `body`, which overrides the default colors to a light background (`white`) and dark text (`black`).

## 🤝 Contributing

Feel free to fork this project and submit a Pull Request if you have suggestions for new features, code clean-up, or improvements (e.g., adding a player score tracker).

***

Made with simple web technologies.
