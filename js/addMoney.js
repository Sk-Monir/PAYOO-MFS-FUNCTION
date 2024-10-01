
// add event handler function for add money
document.getElementById('add-money').addEventListener('click', function (event) {
    event.preventDefault();
    const addMoney = getInputValueById('input-amount');
    // validation Add Money
    if (isNaN(addMoney)|| addMoney < 0) {
        alert('Fail to add money. Try again later');
        return;
    }
    const pinNumber = getInputValueById('input-pin');

    if (pinNumber === (1234)) {
        const mainBalance = getTextValueById('balance');
        const newBalance = mainBalance + addMoney;
        document.getElementById('balance').innerText = newBalance;

        // Add Transaction history add money
        transaction('Added : ', addMoney, newBalance);
    } else {
        alert('Fail to add money. Try again later')
    }
})