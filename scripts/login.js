const loginButton = document.querySelector("#login_btn");
const inputFields = document.querySelectorAll(".floating-input");
const backButton = document.querySelector(".back_container");

window.addEventListener("load", setup);

function setup() {
  loginButton.classList.add("disabled");

  inputFields[0].addEventListener("input", checkMailValidation);
  inputFields[1].addEventListener("input", accesLogin);

  backButton.addEventListener("click", () => {
    history.back();
  });
}

function accesLogin(e) {
  let mailValidity = checkMailValidation();
  console.log(mailValidity);

  if (mailValidity == true && e.target.value.length == e.target.getAttribute("minlength")) {
    loginButton.classList.remove("disabled");
  }
}

function checkMailValidation() {
  if (inputFields[0].checkValidity()) {
    return true;
  }
}
