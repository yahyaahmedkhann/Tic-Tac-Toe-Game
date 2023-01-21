function resetGameStatus () {
    activePlayer = 0;
    currentRound = 1;
    gameIsOver = false;
    GameOverElement.firstElementChild.innerHTML = 'You won, <span id="winner-name">Player Name</span>!';
    GameOverElement.style.display = "none";


    let gameBoardIndex = 0;
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            gameData[i][j] = 0;
            const gameBoardItemElement = GameBoardElement.children[gameBoardIndex];
            GameBoardElement.children[gameBoardIndex].textContent = "";
            gameBoardItemElement.classList.remove("disabled");
            gameBoardIndex++;
        }
    }
}




function StartNewGame() {
    if (players[0].name === "" || players[1].name === "") {
        alert("Please, Enter names in the required field");
        return;
    }

    resetGameStatus();

    ActivePlayerNameElement.textContent = players[activePlayer].name;
    GameAreaElement.style.display = "block";
}


function switchPlayer() {
    if (activePlayer === 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }
    ActivePlayerNameElement.textContent = players[activePlayer].name;
}


function selectGameField(event) {
    if (event.target.tagName !== "LI" || gameIsOver) {
        return;
    }

    const SelectedField = event.target;
    const SelectedColumn = SelectedField.dataset.col - 1;
    const SelectedRow = SelectedField.dataset.row - 1;

    if (gameData[SelectedRow][SelectedColumn] > 0) {
        alert("Please Select an Another Field");
        return;
    }


    SelectedField.textContent = players[activePlayer].symbol;
    SelectedField.classList.add("disabled");

    gameData[SelectedRow][SelectedColumn] = activePlayer + 1;

    const winnerId = checkForGameOver();

    if (winnerId !== 0) {
        endGame(winnerId);
    }

    currentRound++;
    switchPlayer();
}

function checkForGameOver() {
    // checking the rows for equality
    for (let i = 0; i < 3; i++) {
        if (gameData[i][0] > 0 && gameData[i][0] === gameData[i][1] && gameData[i][1] === gameData[i][2]) {
            return gameData[i][0];
        }
    }
    // checking the columns for equality
    for (let i = 0; i < 3; i++) {
        if (
            gameData[0][i] > 0 && gameData[0][i] === gameData[1][i] && gameData[0][i] === gameData[2][i]
        ) {
            return gameData[0][i];
        }

    }

    // checking for diaognal from top to left
    if (gameData[0][0] > 0 && gameData[0][0] === gameData[1][1] && gameData[1][1] === gameData[2][2]) {
        return gameData[0][0];
    }

    // checking for diaognal from left to right
    if (gameData[2][0] > 0 && gameData[2][0] === gameData[1][1] && gameData[1][1] === gameData[0][2]) {
        return gameData[2][0];
    }

    if (currentRound === 9) {
        return -1;
    }

    return 0;
}

function endGame(winnerId) {
    gameIsOver = true;
    GameOverElement.style.display = "block";

    if (winnerId > 0) {
        const winnerName = players[winnerId - 1].name;
        GameOverElement.firstElementChild.firstElementChild.textContent = winnerName;
    } else {
        GameOverElement.firstElementChild.textContent = "It\'s a draw!"
    }
}