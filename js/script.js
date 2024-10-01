// common shared script

//Shared function to get all input value
function getInputValueById(id) {
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

// Shared function to get all TEXT value
function getTextValueById(id) {
    const textValue = document.getElementById(id).innerText;
    const textValueNumber = parseFloat(textValue);
    return textValueNumber;
}

// Shared function to Show section
function showSectionById(id) {
    document.getElementById('add-money-form').classList.add('hidden')
    document.getElementById('cash-out-form').classList.add('hidden')
    document.getElementById('transactions').classList.add('hidden')
    // Shared function to hide section
    document.getElementById(id).classList.remove('hidden')
}

// Add Transaction history 
function transaction(name,amount,balance) {
    const p = document.createElement('p');
    p.innerText = `${name} ${amount} tk . Total Balance : ${balance}`;
    document.getElementById('transactions-container').appendChild(p);
}

