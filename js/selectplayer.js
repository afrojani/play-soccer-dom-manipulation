function getTextElementStringById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    return elementValueString;
}

function disabledButton(idName) {
    document.getElementById(idName).disabled = true;
    document.getElementById(idName).style.backgroundColor = 'gray';
}

var count = 0
function listItem(playerName) {
    count += 1;
    const playerOL = document.querySelector('#list-players');
    const newLi = document.createElement('li');
    newLi.innerText = count + ". " + playerName;
    playerOL.appendChild(newLi);
}

var number_player = 0;
function playerSelection(btnId, txtId) {
    if (number_player < 5) {
        const Player = getTextElementStringById(txtId);
        disabledButton(btnId);
        listItem(Player);
        number_player += 1;
    } else {
        alert('Already selected 5 players')
    }
}
