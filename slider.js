// Select the carousel you'll need to manipulate and the buttons you'll add events to
const carousel = document.querySelector(".carousel");
const card = carousel.querySelector("[data-target='card']");
const leftButton = document.querySelector("[data-action='slideLeft']");
const rightButton = document.querySelector("[data-action='slideRight']");
const carouselWidth = carousel.offsetWidth;
let  cardMarginRight = Number(window.getComputedStyle(card).marginRight.match(/\d/g)[0]);

const totalCard = carousel.querySelectorAll("[data-target='card']").length;

let start = 0;
const max = -((totalCard) * carouselWidth +
(cardMarginRight * (totalCard)) -
carouselWidth - cardMarginRight);

leftButton.addEventListener("click", function () {
  if (start !== 0) {
    start += carouselWidth + cardMarginRight;
    carousel.style.transform = `translateX(${start}px)`;
  }
  else if(start == 0){
    start = max;
    carousel.style.transform = `translateX(${start}px)`;
  }
})

rightButton.addEventListener("click", function () {
  if (start !== max) {
    start -= carouselWidth + cardMarginRight;
    carousel.style.transform = `translateX(${start}px)`;
  }
  else if (start == max) {
    start = 0;
    carousel.style.transform = `translateX(${start}px)`;
  }
})


