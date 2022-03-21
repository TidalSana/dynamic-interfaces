// css sheets
import "../styles/style.css";
import "../styles/slider.css";

let count = 0;

const forward = function () {
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;

  count++;

  // if we reach the end (total amount)
  // reset the slide counter and go back
  if (count == totalSlides) {
    count = 0;
  }

  // remove the show class from everything
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("show");
  }
  // add the class to only the one in count
  slides[count].classList.add("show");
};

const reverse = function () {
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;

  // if we are the first image
  if (count == 0) {
    // we go back to the totalSlides = 2
    // since arrays go ahead by 1
    count = totalSlides - 1;
  } else {
    count--;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("show");
  }
  slides[count].classList.add("show");
};

export { forward, reverse };
