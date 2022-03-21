// css sheets
import "../styles/style.css";
import "../styles/mobile.css";

// js sheets
import { loadHome, createDiv, createButtons } from "./loadPage";

const createIcons = function (id, group, name) {
  let span = document.createElement("span");
  span.id = id;
  span.classList.add(group);
  span.innerHTML = name;

  return span;
};
const createMM = function (id, group) {
  let div = document.createElement("div");
  div.id = id;
  div.classList.add(group);
  div.classList.add("icon-format-close");

  return div;
};

const loadMobileMenu = function () {
  let main = document.querySelector(".content-home");
  main.classList.remove("drop-page");
  main.classList.remove("image-page");
  main.classList.add("mobile-page");

  main.innerHTML = "";

  let returnDiv = createDiv("back-div", "interfaces");
  let mmDiv = createDiv("mm-menu", "interfaces");

  let searchIcon = createIcons(
    "search-icon",
    "misc",
    `<i class="fa-solid fa-magnifying-glass"></i>`
  );
  let gamingIcon = createIcons(
    "gaming-icon",
    "misc",
    `<i class="fa-solid fa-gamepad"></i>`
  );
  let plusIcon = createIcons(
    "plus",
    "plus-icon",
    `<i class="fa-solid fa-plus"></i>`
  );
  let chatIcon = createIcons(
    "chat-icon",
    "misc",
    `<i class="fa-solid fa-comments"></i>`
  );
  let settingsIcon = createIcons(
    "settings-icon",
    "misc",
    `<i class="fa-solid fa-comments"></i>`
  );

  let backBtn = createButtons("back-button", "mobile", "back");
  let mmBtn = createMM("mm-button-page", "mm-button-mobile");

  mmBtn.appendChild(searchIcon);
  mmBtn.appendChild(gamingIcon);
  mmBtn.appendChild(plusIcon);
  mmBtn.appendChild(chatIcon);
  mmBtn.appendChild(settingsIcon);

  backBtn.addEventListener("click", loadHome);

  plusIcon.addEventListener("click", function () {
    setTimeout(function () {
      // if btn is open, remove class
      if (mmBtn.classList.contains("open")) {
        mmBtn.classList.remove("open");
        mmBtn.classList.remove("icon-format-open");
        plusIcon.classList.remove("mm-forwards");
        plusIcon.classList.add("mm-backwards");
        mmBtn.classList.add("close");
        mmBtn.classList.add("icon-format-close");

        // make icons invisible
        searchIcon.classList.add("invisible");
        gamingIcon.classList.add("invisible");
        chatIcon.classList.add("invisible");
        settingsIcon.classList.add("invisible");

        // remove visible class
        searchIcon.classList.remove("visible");
        gamingIcon.classList.remove("visible");
        chatIcon.classList.remove("visible");
        settingsIcon.classList.remove("visible");
      } else {
        mmBtn.classList.add("open");
        mmBtn.classList.remove("icon-format-close");
        mmBtn.classList.add("icon-format-open");
        plusIcon.classList.add("mm-forwards");
        plusIcon.classList.remove("mm-backwards");
        mmBtn.classList.remove("close");

        // make icons visible
        searchIcon.classList.add("visible");
        gamingIcon.classList.add("visible");
        chatIcon.classList.add("visible");
        settingsIcon.classList.add("visible");

        // remove invisible class
        searchIcon.classList.remove("invisible");
        gamingIcon.classList.remove("invisible");
        chatIcon.classList.remove("invisible");
        settingsIcon.classList.remove("invisible");
      }
    }, 200);
  });

  returnDiv.appendChild(backBtn);
  mmDiv.appendChild(mmBtn);

  main.appendChild(returnDiv);
  main.appendChild(mmDiv);
};

export default loadMobileMenu;
