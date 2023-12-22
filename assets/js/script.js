console.log("script loaded");

const toggleSignUpPage = document.querySelector(".toggle-sign-up-page");
const toggleSignInPage = document.querySelector(".toggle-sign-in-page");

const signUpPage = document.querySelector(".sign-up-container");
const signInPage = document.querySelector(".sign-in-container");
const adminLogin = document.querySelector(".admin-login-container");

toggleSignUpPage.addEventListener("click", () => {
  signUpPage.classList.add('animate__animated');
  signUpPage.classList.add('animate__fadeInRight');
  signUpPage.classList.add("active");
  signInPage.classList.remove("active");
});

toggleSignInPage.addEventListener("click", () => {
  signInPage.classList.add('animate__animated');
  signInPage.classList.add('animate__fadeInLeft');
  signInPage.classList.add("active");
  signUpPage.classList.remove("active");
});


// show password
const showPassword = document.querySelector(".show-password");

showPassword.addEventListener("click", () => {
  if (showPassword.classList.contains("fa-eye")) {
    showPassword.classList.remove("fa-eye");
    showPassword.classList.add("fa-eye-slash");
  } else {
    showPassword.classList.remove("fa-eye-slash");
    showPassword.classList.add("fa-eye");
  }

  const password = document.querySelector(".password");
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
});

// show confirm password
const showConfirmPassword = document.querySelector(".show-confirm-password");

showConfirmPassword.addEventListener("click", () => {
  if (showConfirmPassword.classList.contains("fa-eye")) {
    showConfirmPassword.classList.remove("fa-eye");
    showConfirmPassword.classList.add("fa-eye-slash");
  } else {
    showConfirmPassword.classList.remove("fa-eye-slash");
    showConfirmPassword.classList.add("fa-eye");
  }

  const confirmPassword = document.querySelector(".confirm-password");
  if (confirmPassword.type === "password") {
    confirmPassword.type = "text";
  } else {
    confirmPassword.type = "password";
  }
});
