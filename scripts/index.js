// Variabels:
const counters = document.querySelectorAll(".number");
const numbersContainer = document.querySelector(".section_3");

// Wait for document to load
window.addEventListener("load", setup);

function setup() {
  window.addEventListener("scroll", () => {
    countUp();
  });

  if (localStorage.getItem("hasCodeRunBefore") === null) {
    // Display popup after 2 sec
    setTimeout(displayPopup, 2000);
    localStorage.setItem("hasCodeRunBefore", true);
  }
}

// Get position of element
function checkScroll(el) {
  let rect = el.getBoundingClientRect();
  if (window.innerHeight >= rect.top + el.offsetHeight) return true;
  return false;
}

// Numbers animation
function countUp() {
  //Check if scroll position is = to numbers container
  if (!checkScroll(numbersContainer)) return;
  counters.forEach((counter) => {
    const updateCounter = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerHTML;
      const increment = target / 200;
      if (count < target) {
        counter.innerHTML = `${Math.ceil(count + increment)}`;
        setTimeout(updateCounter, 70);
      } else counter.innerHTML = target;
    };
    updateCounter();
  });
}
// Display popup
function displayPopup() {
  const popup = document.querySelector(".cookie_popup");
  const closePopup = document.querySelector(".cookie_popup .close");
  const popupOverlay = document.querySelector(".popup_overlay");

  popupOverlay.classList.toggle("popup_overlay-active");

  popup.className = "cookie_popup showPopup";

  closePopup.addEventListener("click", () => {
    popup.className = "cookie_popup hidePopup";
    popupOverlay.classList.toggle("popup_overlay-active");
  });

  // If user clicks outside the popup - close closeup and remove overlay
  document.addEventListener("click", function (event) {
    const outsideClick = !popup.contains(event.target);

    if (outsideClick) {
      if (popup.classList.contains("hidePopup")) {
        return;
      } else {
        popup.className = "cookie_popup hidePopup";
        popupOverlay.classList.toggle("popup_overlay-active");
      }
    }
  });
}
