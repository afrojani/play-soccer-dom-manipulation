function getTextElementStringById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    // const value = parseFloat(elementValueString);
    return elementValueString;
}

function disabledButton(idName) {
    document.getElementById(idName).disabled = true;
    document.getElementById(idName).style.backgroundColor = 'gray';
}

function listItem(playerName) {
    const playerOL = document.querySelector('#list-players');
    const newLi = document.createElement('li');
    newLi.innerText = playerName;
    playerOL.appendChild(newLi);
}

function playerSelection(btnId, txtId) {
    document.getElementById(btnId).addEventListener('click', function () {
        const Player = getTextElementStringById(txtId);
        disabledButton(btnId);
        listItem(Player);
    })
}


playerSelection('messi', 'text-messi');
playerSelection('neymar', 'text-neymar');
playerSelection('mbappe', 'text-mbappe');
playerSelection('vitor', 'text-vitor');
playerSelection('ramos', 'text-ramos');
playerSelection('sanches', 'text-sanches');
// function setTextElementStringBYId(elementId, newText) {
//     const textElement = document.getElementById(elementId);
//     textElement.innerText = newText;
// }

// document.getElementById('messi').addEventListener('click', function () {
//     const fisrtPlayer = getTextElementStringById('text-messi');
//     disabledButton('messi');
//     listItem(fisrtPlayer);
// })