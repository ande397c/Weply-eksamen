const dropdownElements = document.querySelectorAll(".dropdown_element h4");
// const dropdownElementsSpan = document.querySelectorAll(".dropdown_element span");

window.addEventListener("load", setup);

function setup() {
  console.log("setup");
  appendDropdowns();
}

function appendDropdowns() {
  dropdownElements.forEach((dropdownElement) => {
    dropdownElement.addEventListener("click", toggleDropdown);
  });
}

function toggleDropdown(e) {
  const clickedElement = e.target.parentElement;
  const dropdownElementsSpan = e.target.previousSibling.nextSibling.childNodes[1];

  clickedElement.classList.toggle("test");

  console.log(dropdownElementsSpan);

  let siblings = getSiblings(clickedElement);

  for (i = 0; i < siblings.length; i++) {
    siblings[i].classList.remove("test");
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
