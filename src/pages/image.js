// css sheets
import "../styles/style.css";
import "../styles/slider.css";

// images
import Flame from "../img/flame.jpg";
import Ocean from "../img/ocean.jpg";
import Road from "../img/road.jpg";

// js sheets
import { loadHome, createDiv, createButtons } from "./loadPage";
import { forward, reverse } from "./logic";

const loadImageMenu = function () {
  let main = document.querySelector(".content-home");
  main.classList.remove("drop-page");
  main.classList.remove("mobile-page");
  main.classList.add("image-page");

  main.innerHTML = "";

  let returnDiv = createDiv("back-div", "interfaces");
  let backBtn = createButtons("back-button", "image", "back");

  let imgContainer = createDiv("img-div", "containers");
  let leftBtn = createButtons(
    "left-button",
    "directions",
    `<i class="fa-solid fa-arrow-left"></i>`
  );
  let rightBtn = createButtons(
    "right-button",
    "directions",
    `<i class="fa-solid fa-arrow-right"></i>`
  );
  let imgFrame = createDiv("img-frame", "frame");

  let slideOne = createDiv("one", "slide");
  let slideTwo = createDiv("two", "slide");
  let slideThree = createDiv("three", "slide");

  let imgOne = new Image();
  let imgTwo = new Image();
  let imgThree = new Image();

  imgOne.src = Flame;
  imgTwo.src = Ocean;
  imgThree.src = Road;

  imgOne.id = "flame";
  imgTwo.id = "ocean";
  imgThree.id = "road";

  slideOne.classList.add("show");

  imgOne.classList.add("images");
  imgTwo.classList.add("images");
  imgThree.classList.add("images");

  slideOne.appendChild(imgOne);
  slideTwo.appendChild(imgTwo);
  slideThree.appendChild(imgThree);

  imgFrame.appendChild(slideOne);
  imgFrame.appendChild(slideTwo);
  imgFrame.appendChild(slideThree);

  backBtn.addEventListener("click", loadHome);
  rightBtn.addEventListener("click", forward);
  leftBtn.addEventListener("click", reverse);

  returnDiv.appendChild(backBtn);
  imgContainer.appendChild(leftBtn);
  imgContainer.appendChild(imgFrame);
  imgContainer.appendChild(rightBtn);

  main.appendChild(returnDiv);
  main.appendChild(imgContainer);
};

export default loadImageMenu;
