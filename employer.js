const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");
const switchButton = document.getElementById("switch");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
  // Show the sign-in container when switching to sign-up form
  document.querySelector(".sign-in-container").style.display = "none";
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
  // Show the sign-in container when switching to sign-in form
  document.querySelector(".sign-in-container").style.display = "block";
});

switchButton.addEventListener("click", function () {
  window.location.href = "index.html";
});
