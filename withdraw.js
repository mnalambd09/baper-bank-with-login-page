document.getElementById('btn-withdraw').addEventListener('click', function(){
    const previuswithdrawAmount = document.getElementById('withdraw-field');
    const withdrawValue = previuswithdrawAmount.value;
    const convertFloat = parseFloat(withdrawValue);
    const preWithdrawBalance = document.getElementById('withdraw-total');
    const withdrawText = preWithdrawBalance.innerText;
    const convertText = parseFloat(withdrawText);
    const totalWithdraw = convertFloat + convertText;
    previuswithdrawAmount.innerText = totalWithdraw;

    const previusBalance = document.getElementById('balance-total');
    const getValue = previusBalance.innerText;
    const convertBalance = parseFloat(getValue);
    const totalCurrentBalance = convertBalance - convertFloat;
    previusBalance.innerText = totalCurrentBalance;

})