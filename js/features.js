// toggle the button show option hide option
document.getElementById('add-money-btn').addEventListener('click', function (event) {
    showSectionById('add-money-form');
});
document.getElementById('cash-out-btn').addEventListener('click', function (event) {
    showSectionById('cash-out-form');
});
document.getElementById('transactions-btn').addEventListener('click', function (event) {
    showSectionById('transactions');
});