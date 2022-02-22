let slidePosition = 0;
const slides = document.querySelectorAll('.carousel_item');
const totalSlides = slides.length;
next = document.querySelector('#carousel_button--next')
previous = document.querySelector('#carousel_button--prev')
  next.addEventListener('click', () => {
    moveToNextSlide();
    next.classList.add('last-click');
    previous.classList.remove('last-click');
  });
  previous.addEventListener('click', () => {
    moveToPrevSlide();
    previous.classList.add('last-click');
    next.classList.remove('last-click');
  });


function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove('carousel_item--visible');
    slide.classList.add('carousel_item--hidden');
  }
  slides[slidePosition].classList.add('carousel_item--visible');
}

function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  updateSlidePosition();
}



function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }
  updateSlidePosition();
}