function validate(e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
    const age = document.getElementById("age").value;
    const msgBox = document.getElementById("messege");

    let messege = '';

    if (email === '') {
        messege = 'Enter an email.';
        msgBox.style.color = 'red';
    } else if (pass === '') {
        messege = 'Enter a password.';
        msgBox.style.color = 'red';
    } else if (age === '') {
        messege = 'Enter a age.';
        msgBox.style.color = 'red';
    } else {
        messege = 'Login Successful!';
        msgBox.style.color = 'green';
    }

    msgBox.innerText = messege;
}