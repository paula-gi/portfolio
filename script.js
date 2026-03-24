
const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

const container = document.getElementById("projects-container");
const grid = container.querySelector(".projects-grid");

const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let index = 0;
const visibleCards = 3;

const cards = document.querySelectorAll(".project-card");
const totalCards = cards.length;

function updateCarousel() {
  const cardWidth = cards[0].offsetWidth + 32; 
  grid.style.transform = `translateX(-${index * cardWidth}px)`;
}

nextBtn.addEventListener("click", () => {
  if (index < totalCards - visibleCards) {
    index++;
    updateCarousel();
  }
});

prevBtn.addEventListener("click", () => {
  if (index > 0) {
    index--;
    updateCarousel();
  }
});
