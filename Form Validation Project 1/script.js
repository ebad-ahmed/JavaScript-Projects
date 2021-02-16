//getting Element from dom
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//creating functions

//function to show error
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}
//function to show succes
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//function to show email valid or not
function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;  //regular expression se check hogi pori email
    return re.test(String(email).toLowerCase());    //phr return hojaegi email
}





//eventlistener
form.addEventListener('submit', function (e) {
    e.preventDefault();
    //console.log(password.value);
    if (username.value === '') {
        showError(username, 'Username is required')
    } else {
        showSuccess(username);
    }

    if (email.value === '') {
        showError(email, 'Email is required');
    } else if (!isValidEmail(email.value)) {
        showError(email, 'Email is not invalid')
    }
    else {
        showSuccess(email);
    }

    if (password.value === '') {
        showError(password, 'Password is required')
    } else {
        showSuccess(password);
    }

    if (password2.value === '') {
        showError(password2, 'Confirm password is required')
    } else {
        showSuccess(password2);
    }
})

