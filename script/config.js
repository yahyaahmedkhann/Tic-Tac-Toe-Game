function OpenPlayerConfig (event) {
    editedPlayer = +event.target.dataset.playerid; // '+1' => 1
    PlayerConfigOverlayElement.style.display = "block";
    BackdropElement.style.display = "block";
}

function ClosePlayerConfig() {
    PlayerConfigOverlayElement.style.display = "none";
    BackdropElement.style.display = "none";
    FormELement.firstElementChild.classList.remove("errorr");
    ConfigErrorElement.textContent = "";
    FormELement.firstElementChild.lastElementChild.value = "";
}

function SavePlayerConfig(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const EnteredPlayerName = formData.get("playername").trim();
  


    if (!EnteredPlayerName) {
        event.target.firstElementChild.classList.add("errorr");
        ConfigErrorElement.textContent = "Please, Enter a Valid Name!";
        return;
    }


    const UpdatededitedPlayerDataElement = document.getElementById("player-" + editedPlayer + "-data");
    UpdatededitedPlayerDataElement.children[1].textContent = EnteredPlayerName;


    players[editedPlayer - 1].name = EnteredPlayerName;

    ClosePlayerConfig();
}