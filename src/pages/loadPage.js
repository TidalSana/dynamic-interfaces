// style sheets
import "../styles/reset.css";
import "../styles/style.css";

// js sheets
import loadDropMenu from "../pages/drop";
import loadMobileMenu from "../pages/mobile";
import loadImageMenu from "../pages/image";

let createButtons = function (id, group, name) {
  const buttons = document.createElement("button");
  const span = document.createElement("span");
  buttons.id = id;
  buttons.classList.add(group);
  buttons.appendChild(span);

  span.innerHTML = name;

  return buttons;
};

let createDiv = function (id, group) {
  const div = document.createElement("div");
  div.id = id;
  div.classList.add(group);

  return div;
};

let loadHome = function () {
  let main = document.querySelector(".content-home");
  main.classList.remove("drop-page");
  main.classList.remove("mobile-page");
  main.classList.remove("image-page");

  main.innerHTML = "";

  let dropDown = createDiv("drop-down", "interfaces");
  let mobileMenu = createDiv("mobile-menu", "interfaces");
  let imageSlider = createDiv("image-slider", "interfaces");

  let ddBtn = createButtons("dd-button", "home-buttons", "Dropdown");
  let mmBtn = createButtons("mm-button", "home-buttons", "Mobile Menu");
  let imgBtn = createButtons("img-button", "home-buttons", "Image Slider");

  dropDown.appendChild(ddBtn);
  mobileMenu.appendChild(mmBtn);
  imageSlider.appendChild(imgBtn);

  ddBtn.addEventListener("click", loadDropMenu);
  mmBtn.addEventListener("click", loadMobileMenu);
  imgBtn.addEventListener("click", loadImageMenu);

  main.appendChild(dropDown);
  main.appendChild(mobileMenu);
  main.appendChild(imageSlider);
};

export { loadHome, createButtons, createDiv };
