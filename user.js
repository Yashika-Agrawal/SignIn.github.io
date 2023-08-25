const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");
const switchButton = document.getElementById("switch");
switchButton.addEventListener("click", function () {
  window.location.href = "employer.html";
});

function handleWorkExperienceChange() {
  const fresherRadio = document.getElementById("fresher");
  const yearsOfExperienceInput = document.getElementById("yearsOfExperience");
  const employerNameInput = document.getElementById("employerName");
  const employmentDurationInput = document.getElementById("employmentDuration");
  const jobTitleInput = document.getElementById("jobTitle");

  // Check if "Fresher" radio button is selected
  if (fresherRadio.checked) {
    // Disable the input fields
    yearsOfExperienceInput.disabled = true;
    employerNameInput.disabled = true;
    employmentDurationInput.disabled = true;
    jobTitleInput.disabled = true;
  } else {
    // Enable the input fields
    yearsOfExperienceInput.disabled = false;
    employerNameInput.disabled = false;
    employmentDurationInput.disabled = false;
    jobTitleInput.disabled = false;
  }
  // if (container.classList.contains("right-panel-active")) {
  //   container.classList.remove("right-panel-active");
  // }
}

const radioContainer = document.querySelector(".radio-container");
radioContainer.addEventListener("change", handleWorkExperienceChange);

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
