// function to validate name
function validateName() {
  let errorMessage = document.getElementById("message");
  let fullName = document.getElementById("name");

  if (fullName.value.trim() == "") {
    errorMessage.textContent = "Full name cannot be blank.";
    fullName.style.borderWidth = "1px";
    fullName.style.borderColor = "red";
    return false;
  } else if (fullName.value.length <= 5) {
    errorMessage.textContent = "Please enter a valid name.";
    fullName.style.borderWidth = "1px";
    fullName.style.borderColor = "red";
    return false;
  } else {
    errorMessage.textContent = "";
    fullName.style.borderColor = "green";
    fullName.style.borderWidth = "2px";
    return true;
  }
}
// to validate email
function validateEmail() {
  let errorMessage = document.getElementById("message");
  let email = document.getElementById("email");

  //   validation
  let regEx = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  if (email.value.trim() == "") {
    errorMessage.textContent = "Email cannot be blank.";
    email.style.borderWidth = "1px";
    email.style.borderColor = "red";
    return false;
  } else if (!email.value.match(regEx)) {
    errorMessage.textContent = "Email not valid.";
    email.style.borderWidth = "1px";
    email.style.borderColor = "red";
    return false;
  } else {
    errorMessage.textContent = "";
    email.style.borderWidth = "2px";
    email.style.borderColor = "green";
    return true;
  }
}

// to validate password
function validatePassword() {
  // password error
  let errorMessage = document.getElementById("message");
  // password
  let password = document.getElementById("password1");

  if (password.value.trim() == "") {
    errorMessage.textContent = "Password cannot be blank.";
    password.style.borderWidth = "1px";
    password.style.borderColor = "red";
    return false;
  } else if (password.value.length <= 6 || password.value.length >= 20) {
    errorMessage.textContent = "Password is too weak";
    password.style.borderWidth = "1px";
    password.style.borderColor = "red";
    return false;
  } else {
    errorMessage.textContent = "";
    password.style.borderWidth = "2px";
    password.style.borderColor = "green";
    return true;
  }
}

// to confirm password
function validateConfirmPassword() {
  let errorMessage = document.getElementById("message");
  let confirmPassword = document.getElementById("password2");
  // password
  let password = document.getElementById("password1");

  if (confirmPassword.value !== password.value) {
    errorMessage.textContent = "Passwords does not match.";
    confirmPassword.style.borderWidth = "1px";
    confirmPassword.style.borderColor = "red";
    return false;
  } else {
    errorMessage.textContent = "";
    confirmPassword.style.borderWidth = "2px";
    confirmPassword.style.borderColor = "green";
    return true;
  }
}

// to submit form
function validateForm() {
  let errorMessage = document.getElementById("message");
  if (
    !validateName() ||
    !validateEmail() ||
    !validatePassword() ||
    !validateConfirmPassword()
  ) {
    errorMessage.textContent = "Please resolve the errors.";
    return false;
  } else {
    errorMessage.textContent = "";
    return true;
  }
}
