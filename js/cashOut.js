
// add event handler function for Cash Out money
document.getElementById('cash-out').addEventListener('click', function (event) {
    event.preventDefault();
    const cashOut = getInputValueById('input-cash-out-amount');
    // validation cashOut
    if (isNaN(cashOut) || cashOut < 0) {
        alert('Fail to cash out. Try again later');
        return;
    }
    const pinNumber = getInputValueById('input-cash-out-pin');

    if (pinNumber === (1234)) {
        const mainBalance = getTextValueById('balance');
        if (cashOut > mainBalance) {
            alert('Fail to cash out. Try again later');
            return;
        }
        const newBalance = mainBalance - cashOut;
        document.getElementById('balance').innerText = newBalance;

        // Add Transaction history Cash Out
        transaction('Cash Out : ', cashOut, newBalance);
    } else {
        alert('Fail to Cash Out Money. Please Try again later')
    }
})