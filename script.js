const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");
const formOutput = document.getElementById("formOutput");

nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
messageInput.addEventListener("input", validateMessage);

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let isValid = validateName() && validateEmail() && validateMessage();

    if (isValid) {
        formOutput.innerText = "✅ Your message has been sent successfully!";
        formOutput.style.color = "green";
        form.reset();
        clearErrors();
    } else {
        formOutput.innerText = "❌ Please fix the errors before submitting!";
        formOutput.style.color = "red";
    }
});


function validateName() {
    let namePattern = /^[A-Za-z\s]+$/;

    if (nameInput.value.trim() === "") {
        nameError.innerText = "";
        nameInput.style.border = "2px solid #ccc";
        return false;
    }

    if (!nameInput.value.match(namePattern)) {
        nameError.innerText = "❌ Enter a valid name (only letters allowed)!";
        nameInput.style.border = "2px solid red";
        return false;
    }

    nameError.innerText = "";
    nameInput.style.border = "2px solid green";
    return true;
}

function validateEmail() {
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailInput.value.trim() === "") {
        emailError.innerText = "";
        emailInput.style.border = "2px solid #ccc";
        return false;
    }

    if (!emailInput.value.match(emailPattern)) {
        emailError.innerText = "❌ Enter a valid email!";
        emailInput.style.border = "2px solid red";
        return false;
    }

    emailError.innerText = "";
    emailInput.style.border = "2px solid green";
    return true;
}

function validateMessage() {
    if (messageInput.value.trim() === "") {
        messageError.innerText = "";
        messageInput.style.border = "2px solid #ccc";
        return false;
    }

    if (messageInput.value.trim().length < 10) {
        messageError.innerText = "❌ Message must be at least 10 characters!";
        messageInput.style.border = "2px solid red";
        return false;
    }

    messageError.innerText = "";
    messageInput.style.border = "2px solid green";
    return true;
}


function clearErrors() {
    nameError.innerText = "";
    emailError.innerText = "";
    messageError.innerText = "";

    nameInput.style.border = "2px solid #ccc";
    emailInput.style.border = "2px solid #ccc";
    messageInput.style.border = "2px solid #ccc";
}

document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        alert("Enter key pressed! 🚀");
    }
});