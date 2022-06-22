const bg = document.querySelector('.bg-box');
const slides = document.querySelectorAll('.slide');

const btnLeft = document.querySelector('.btn--left');
const btnRight = document.querySelector('.btn--right');

let activeSlideIndex = 0;
showSlide(0);

btnLeft.addEventListener('click', () => {
  activeSlideIndex = (activeSlideIndex - 1) < 0 
    ? slides.length - 1
    : activeSlideIndex - 1;
  console.log(activeSlideIndex);
  showSlide(activeSlideIndex);
});
btnRight.addEventListener('click', () => {
  activeSlideIndex = (activeSlideIndex + 1) > (slides.length - 1)
    ? 0
    : activeSlideIndex + 1;
    console.log(activeSlideIndex);
  showSlide(activeSlideIndex);
});

function showSlide(index) { 
  slides.forEach(slide => {
    slide.classList.remove('active');
  });
  slides[index].classList.add('active');

  //const imgUrl = slides[index].style.getPropertyValue('background-image');
  //bg.style.setProperty('background-image', 'linear-gradient(#0006, #0006), ' + imgUrl); 
  bg.style.backgroundImage = slides[index].style.backgroundImage; 
}