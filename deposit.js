document.getElementById('btn-deposit').addEventListener('click', function(){
    const inputButton = document.getElementById('deposit-field');
    const getValue = inputButton.value;
    const convertToFloat = parseFloat(getValue);
    const depositAmount = document.getElementById('deposit-total');
    const getAmount = depositAmount.innerText;
    const convertFloat = parseFloat(getAmount)
    const updateValue = convertToFloat+convertFloat;
    depositAmount.innerText = updateValue;

    const previusBalance = document.getElementById('balance-total');
    const balanceValue = previusBalance.innterText;
    const convetBalanceToFloat = parseFloat(balanceValue);
    const newBalanceTotal = convetBalanceToFloat + convertToFloat;
    previusBalance.innerText = newBalanceTotal;

    inputButton.value = '';
})