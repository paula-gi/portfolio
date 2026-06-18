// Mobile menu toggle
const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// Carousel elements
const container = document.getElementById("projects-container");
const grid = container.querySelector(".projects-grid");

const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

const cards = document.querySelectorAll(".project-card");
const totalCards = cards.length;

let index = 0;

// Visible cards based on screen size
function getVisibleCards() {
  return window.innerWidth <= 768 ? 1 : 3;
}

// Updates carousel position and button states
function updateCarousel() {

  const cardWidth =
    cards[0].getBoundingClientRect().width + 32;

  grid.style.transform =
    `translateX(-${index * cardWidth}px)`;

  // Disable prev button at start
  prevBtn.disabled = index === 0;

  // Disable next button at end
  nextBtn.disabled =
    index >= totalCards - getVisibleCards();
}

// Next button
nextBtn.addEventListener("click", () => {
  const visibleCards = getVisibleCards();

  if (index < totalCards - visibleCards) {
    index++;
    updateCarousel();
  }
});

// Previous button
prevBtn.addEventListener("click", () => {
  if (index > 0) {
    index--;
    updateCarousel();
  }
});

// Recalculate on resize
window.addEventListener("resize", () => {
  updateCarousel();
});

// Initial render
updateCarousel();
