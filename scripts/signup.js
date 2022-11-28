const phonenumberInput = document.querySelector("input[name='phonenumber']");
const urlInput = document.querySelector("input[name='url']");

window.addEventListener("load", setup);

function setup() {
  console.log("setup");

  phonenumberInput.addEventListener("input", handlePhoneInput);
}

function handlePhoneInput(e) {
  console.log("handlephoneinput", e.target.value.length);
  e.target.value = e.target.value
    .replace(/[^\dA-Z]/g, "")
    .replace(/(.{2})/g, "$1 ")
    .trim();

  if (e.target.value.length === 11) {
    urlInput.focus();
  }
}
