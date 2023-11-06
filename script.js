let inputMessage = document.getElementById('message');
let numDisplay = document.getElementById("current");
inputMessage.addEventListener("keyup", countCharacters);

function countCharacters(){
    let num = inputMessage.value.length;
    numDisplay.innerHTML = num;
}

let email = document.getElementById("email");

function validate(){
    let emailRegex = /^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$/;
    let emailValidation = emailRegex.test(email.value);
    if (!emailValidation) {
        alert("Zły mail");
        return false;
    }
    return true;
}