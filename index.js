const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("pass");
const confirm_password = document.getElementById("pass_confirm");

const mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

form.addEventListener("submit", (event) => {
  if (!validateEmail() || !validatePassword()) {
    event.preventDefault();
  }
});

function validateEmail() {
  const emailValue = email.value;
  const valid = mailRegex.test(emailValue);

  if (valid) {
    email.classList.add("sucsess");
    return true;
  } else {
    email.classList.add("error");
    return false;
  }
}

function validatePassword() {
  const passwordValue = password.value;
  const confirmValue = confirm_password.value;

  if (passwordValue !== confirmValue) {
    password.classList.add("error");
    confirm_password.classList.add("error");
    password.classList.remove("success");
    confirm_password.classList.remove("success");
    return false;
  } else {
    password.classList.add("success");
    confirm_password.classList.add("success");
    password.classList.remove("error");
    confirm_password.classList.remove("error");
    return true;
  }
}
