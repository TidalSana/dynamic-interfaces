// css sheets
import "../styles/style.css";
import "../styles/drop.css";

// js sheets
import { loadHome, createDiv, createButtons } from "./loadPage";

const loadDropMenu = function () {
  let main = document.querySelector(".content-home");
  main.classList.remove("mobile-page");
  main.classList.remove("image-page");
  main.classList.add("drop-page");

  main.innerHTML = "";

  let returnDiv = createDiv("back-div", "interfaces");
  let backBtn = createButtons("back-button", "burgers", "back");

  let ddDiv = createDiv("burger-menu", "interfaces");
  let ddBtn = createButtons("burger-button", "burgers", "Dropdown");

  ddDiv.classList.add("interfaces-dd");

  let menuContent = createDiv("dd-menu", "dd-menu-content");

  let firstItem = createDiv("first-dd", "dd-items");
  let secondItem = createDiv("second-dd", "dd-items");
  let thirdItem = createDiv("third-dd", "dd-items");

  firstItem.innerText = "first item";
  secondItem.innerText = "second item";
  thirdItem.innerText = "third item";

  backBtn.addEventListener("click", loadHome);

  let childElement = ddBtn.firstChild;
  ddDiv.addEventListener("mouseover", function () {
    childElement.innerHTML = `<i class="fa-solid fa-circle-chevron-down"></i>`;
    menuContent.classList.add("show");
  });

  ddDiv.addEventListener("mouseout", function () {
    childElement.innerHTML = "Dropdown";
    menuContent.classList.remove("show");
  });

  ddBtn.addEventListener("click", function () {});

  main.appendChild(returnDiv);
  main.appendChild(ddDiv);

  returnDiv.appendChild(backBtn);
  ddDiv.appendChild(ddBtn);
  ddDiv.appendChild(menuContent);

  menuContent.appendChild(firstItem);
  menuContent.appendChild(secondItem);
  menuContent.appendChild(thirdItem);
};

export default loadDropMenu;
