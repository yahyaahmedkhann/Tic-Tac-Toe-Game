const gameData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];


let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;

const players = [
    {
        name: "",
        symbol: "X"
    },
    {
        name: "",
        symbol:"O"
    },
];

const PlayerConfigOverlayElement = document.getElementById("config-overlay");
const BackdropElement = document.getElementById("backdrop");
const FormELement = document.querySelector("form");
const ConfigErrorElement = document.getElementById("config-errors");
const GameAreaElement = document.getElementById("main-game");
const ActivePlayerNameElement = document.getElementById("active-player-name");
const GameOverElement = document.getElementById("game-over");

const EditPlayer1BtnElement = document.getElementById("edit-player-1-btn");
const EditPlayer2BtnElement = document.getElementById("edit-player-2-btn");
const CancelConfigBtnElement = document.getElementById("cancel-config-btn");
const StartNewGameBtnELement = document.getElementById("start-game-btn");
// const GameFieldElements = document.querySelectorAll("#game-board li");
const GameBoardElement = document.getElementById("game-board");



EditPlayer1BtnElement.addEventListener("click", OpenPlayerConfig);
EditPlayer2BtnElement.addEventListener("click", OpenPlayerConfig);

CancelConfigBtnElement.addEventListener("click", ClosePlayerConfig);
BackdropElement.addEventListener("click", ClosePlayerConfig);

FormELement.addEventListener("submit", SavePlayerConfig);

StartNewGameBtnELement.addEventListener("click",StartNewGame);


// for (const GameFieldElement of GameFieldElements) {
// GameFieldElement.addEventListener("click",selectGameField);
// }

GameBoardElement.addEventListener("click", selectGameField);