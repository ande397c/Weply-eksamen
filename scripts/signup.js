const phonenumberInput = document.querySelector("input[name='phonenumber']");
const urlInput = document.querySelector("input[name='url']");

const checkbox = document.querySelector("#checkbox");

const formButton = document.querySelector("#form_button");

window.addEventListener("load", setup);

function setup() {
  formButton.classList.add("disabled");
  phonenumberInput.addEventListener("input", handlePhoneInput);

  formButton.addEventListener("click", submitForm);

  checkbox.addEventListener("change", (e) => {
    if (e.target.checked === true) {
      formButton.classList.remove("disabled");
    } else {
      formButton.classList.add("disabled");
    }
  });
}

function submitForm() {
  // e.preventDefault();
}

function handlePhoneInput(e) {
  console.log("handlephoneinput", e.target.value.length);
  e.target.value = e.target.value
    .replace(/[^\dA-Z]/g, "")
    .replace(/(.{2})/g, "$1 ")
    .trim();

  // if (e.target.value.length === 11) {
  //   urlInput.focus();
  // }
}
