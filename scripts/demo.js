const dropdownElements = document.querySelectorAll(".dropdown_element h4");

const dropdownDivs = document.querySelectorAll(".dropdown_element");

const dropDownNumberBtn = document.querySelector("#dropdown_number");

let dropDownCounter = 3;

window.addEventListener("load", setup);

function setup() {
  dropdownElements.forEach((dropdownElement) => {
    dropdownElement.addEventListener("click", toggleDropdown);
  });

  for (i = 0; i < dropDownCounter; i++) {
    dropdownDivs[i].classList.remove("hide");
  }

  dropDownNumberBtn.addEventListener("click", changeDropDownNumber);
}

function toggleDropdown(e) {
  const clickedElement = e.target.parentElement;
  // const dropdownElementsSpan = e.target.previousSibling.nextSibling.childNodes[1];

  clickedElement.classList.toggle("test");

  let siblings = getSiblings(clickedElement);

  for (i = 0; i < siblings.length; i++) {
    siblings[i].classList.remove("test");
  }
}

function changeDropDownNumber() {
  dropDownNumberBtn.classList.toggle("activate");

  if (dropDownNumberBtn.classList.contains("activate")) {
    increaseDropDowns();
  } else {
    decreaseDropDowns();
  }
}

function decreaseDropDowns() {
  dropDownNumberBtn.textContent = "Vis flere funktioner";
  dropDownCounter = 3;
  for (i = 0; i < dropDownCounter; i++) {
    dropdownDivs[i].classList.add("hide");
  }
}

function increaseDropDowns() {
  dropDownNumberBtn.textContent = "Vis færre funktioner";
  dropDownCounter = dropdownDivs.length;
  for (i = 0; i < dropDownCounter; i++) {
    dropdownDivs[i].classList.remove("hide");
  }
}

function getSiblings(e) {
  // for collecting siblings
  let siblings = [];
  // if no parent, return no sibling
  if (!e.parentNode) {
    return siblings;
  }
  // first child of the parent node
  let sibling = e.parentNode.firstChild;
  // collecting siblings
  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== e) {
      siblings.push(sibling);
    }
    sibling = sibling.nextSibling;
  }
  return siblings;
}
