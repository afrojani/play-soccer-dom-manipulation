function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    // inputField.value = '';
    return inputFieldValue;
}
function getTextElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const value = parseFloat(elementValueString);
    return value;
}

function setTextElementValueBYId(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}

document.getElementById('btn-calculate').addEventListener('click', function () {
    const perPlayerCost = getInputFieldValueById('player-cost');
    const totalPlayerCost = perPlayerCost * 5;
    setTextElementValueBYId('totalplayer-cost', totalPlayerCost);
})

document.getElementById('total-calculation').addEventListener('click', function () {
    const totalPlayerExpenses = getTextElementValueById('totalplayer-cost');
    const managerCost = getInputFieldValueById('manager-cost');
    const coachCost = getInputFieldValueById('coach-cost');
    const overallCost = totalPlayerExpenses + managerCost + coachCost;
    setTextElementValueBYId('overall-total', overallCost);
})