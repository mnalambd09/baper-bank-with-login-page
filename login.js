// step-1: select the button and add event listener
document.getElementById('btn-submit').addEventListener('click', function(){
    // step-2: get the email address inside input field
    // always remember to use .value to get text form an input field
    const emailField = document.getElementById('email-field');
    const email = emailField.value;
    // step-3: get password
    // step-3: a. set id on teh html element
    // step-3: b. get the element
    // step-3: c. get value from the element
    const passwordField = document.getElementById('password-field');
    const password = passwordField.value;
    // console.log(email, password)

    // DANGER: DO NOT VERIFY email and password on the client site
    // step-4: verify email and password and check whether valid user or not

    if(email === 'sontan@bank.com' && password === '123456'){
        window.location.href = 'bank.html';
    }
    else{
        alert('tui password vule gesos, toke ami tejjo korlam');
    }
})