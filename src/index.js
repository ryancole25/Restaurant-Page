import "./style.css";
import { homePage } from "./home.js";
import { menuPage } from "./menu.js";

// homePage();
menuPage();

// Listens for changing the page from the menu bar
const selectors = document.querySelectorAll(".selector");
selectors.forEach((selector) =>
  selector.addEventListener("click", () => {
    toggleLivePage(selector.id);
    removeContent();
    addContent(selector.id);
  })
);

function toggleLivePage(id) {
  let element = document.querySelector(`.${id.toLowerCase()}`);

  // Add a light blue circle beneath the live page
  const circles = document.querySelectorAll(".circle");
  circles.forEach((circle) => (circle.style.backgroundColor = "transparent"));
  element.style.backgroundColor = "lightblue";
}

// Clears the site content except for the menu bar
function removeContent() {
  const content = document.querySelector("#content");
  while (content.firstChild) {
    content.removeChild(content.lastChild);
  }
}

// Adds the correct content to the page DOM
function addContent(id) {
  if (id == "Home") {
    homePage();
  } else if (id == "Menu") {
    menuPage();
  }
}
