//Variables:
const navbarMenu = document.getElementById("navbar");
const burgerMenu = document.getElementById("burger");
const overlayMenu = document.querySelector(".overlay");

// Wait for document to load
window.addEventListener("load", setup);

function setup() {
  // Initialize Event Listeners
  burgerMenu.addEventListener("click", toggleMenu);
  overlayMenu.addEventListener("click", toggleMenu);
  navbarMenu.addEventListener("click", toggleSubMenu);
  // Function called when user resizes window
  window.addEventListener("resize", resizeWindow);
  // Function called when user scrolls
  window.addEventListener("scroll", setScrolling);
  // Call this function automatically
  setActivePage();
}

function setScrolling() {
  const header = document.querySelector(".header");
  const topModule = document.querySelector("#message_board");

  // y = vertical scroll position
  let y = window.scrollY;

  // give header a shadow if y is bigger than 0
  if (y > 0) {
    header.classList.add("header-shadow");
    // else remove shadow
  } else {
    header.classList.remove("header-shadow");
  }
  // When y is between 1500 and 2100, show module
  if (y >= 1500 || y >= 2100) {
    topModule.className = "cta show";
  }
  // When y is less than 1200, hide module
  if (y <= 1200) {
    topModule.className = "cta hide";
  }
  // Scroll to top when module is clicked
  topModule.addEventListener("click", () => {
    window.scrollTo(0, 0);
  });
}

// Gives the current page a specific styling in the nav
function setActivePage() {
  let menuItems = document.querySelectorAll("#menu a");
  const currentLocation = location.href;
  const menuLength = menuItems.length;
  const subMenuSpan = document.querySelector("#menu span");

  // Loop over links and style the link = to the current location
  for (let i = 0; i < menuLength; i++) {
    if (menuItems[i].href === currentLocation) {
      menuItems[i].classList.add("active-page");

      // If one of the sub-menues is the current page, style the span
      if (menuItems[i].classList.contains("submenu-link")) {
        subMenuSpan.classList.add("active-page");
      }
    }
  }
}

// Show and Hide Navbar Function
function toggleMenu() {
  navbarMenu.classList.toggle("active");
  overlayMenu.classList.toggle("active");
}

// Collapsible Mobile Submenu Function
function collapseSubMenu() {
  navbarMenu.querySelector(".menu-dropdown.active .submenu").removeAttribute("style");
  navbarMenu.querySelector(".menu-dropdown.active").classList.remove("active");
}

// Toggle Mobile Submenu Function
function toggleSubMenu(e) {
  if (e.target.hasAttribute("data-toggle") && window.innerWidth <= 992) {
    e.preventDefault();
    const menuDropdown = e.target.parentElement;

    // If Dropdown is Expanded, then Collapse It
    if (menuDropdown.classList.contains("active")) {
      collapseSubMenu();
    } else {
      // Collapse Existing Expanded Dropdown
      if (navbarMenu.querySelector(".menu-dropdown.active")) {
        collapseSubMenu();
      }

      // Expanded the New Dropdown
      menuDropdown.classList.add("active");
      const subMenu = menuDropdown.querySelector(".submenu");
      subMenu.style.maxHeight = subMenu.scrollHeight + "px";
    }
  }
}

// Fixed Resize Window Function
const resizeWindow = () => {
  if (window.innerWidth > 992) {
    if (navbarMenu.classList.contains("active")) {
      toggleMenu();
    }
    if (navbarMenu.querySelector(".menu-dropdown.active")) {
      collapseSubMenu();
    }
  }
};
