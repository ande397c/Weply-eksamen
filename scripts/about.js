const counters = document.querySelectorAll(".number");

const numbersContainer = document.querySelector(".section_2");

window.addEventListener("load", setup);

function setup() {
  window.addEventListener("scroll", () => {
    countUp();
  });
}

function checkScroll(el) {
  let rect = el.getBoundingClientRect();
  if (window.innerHeight >= rect.top + el.offsetHeight) return true;
  return false;
}

function countUp() {
  if (!checkScroll(numbersContainer)) return;
  counters.forEach((counter) => {
    const updateCounter = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerHTML;
      const increment = target / 200;
      if (count < target) {
        counter.innerHTML = `${Math.ceil(count + increment)}`;
        setTimeout(updateCounter, 15);
      } else counter.innerHTML = target;
    };
    updateCounter();
  });
}
