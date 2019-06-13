let slider = document.querySelector("[data-target='slider']");
let slide = slider.querySelector("[data-target='slide']");
let LBtn = document.querySelector("[data-event='slideL']");
let RBtn = document.querySelector("[data-event='slideR']");

let totalSlide = slider.querySelectorAll("[data-target='slide']").length;

let sliderWidth = slider.offsetWidth; //returns the layout width of an element as an integer
let  slideRMargin = Number(window.getComputedStyle(slide).marginRight.match(/\d/g)[0]); //get all the computed CSS property and values of the specified element. e.g: marginRight

let start = 0;
let max = -(totalSlide * sliderWidth + (slideRMargin * totalSlide) -sliderWidth -slideRMargin);

slideLeft = function () {
  if(start != 0 ){
    start += sliderWidth +slideRMargin;
    slide.style.transform = `translateX(${start}px)`;
  }
  else if(start == 0){
    start = max;
    slide.style.transform = `translateX(${start}px)`;
  }
}

LBtn.addEventListener('click', slideLeft);

slideRight = function () {
  if(start != max ){
    start -= sliderWidth +slideRMargin;
    slide.style.transform = `translateX(${start}px)`;
  }
  else if(start == max){
    start = 0;
    slide.style.transform = `translateX(${start}px)`;
  }
}

RBtn.addEventListener('click', slideRight);

// RBtn.addEventListener("click", function () {
//   if (start !== max) {
//     start -= sliderWidth + slideRMargin;
//     carousel.style.transform = `translateX(${start}px)`;
//   }
//   else if (start == max) {
//     start = 0;
//     carousel.style.transform = `translateX(${start}px)`;
//   }
// })