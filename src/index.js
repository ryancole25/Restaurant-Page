import "./style.css";
import { homePage } from "./home.js";
import { menuPage } from "./menu.js";
import { contactPage } from "./contact.js";

// Start on the home page;
homePage();

// Add the Menu button listener to the home page
let menuButton = document.querySelector("button");
menuButton.addEventListener("click", () => {
  toggleLivePage("Menu");
  removeContent();
  menuPage();
});

// Have the main photo take you back to the home page
const logoImage = document.querySelector(".logo");
logoImage.addEventListener("click", () => {
  toggleLivePage("Home");
  removeContent();
  homePage();
  menuButton = document.querySelector("button");
  menuButton.addEventListener("click", () => {
    toggleLivePage("Menu");
    removeContent();
    menuPage();
  });
});

// Listens for changing the page from the menu bar
const selectors = document.querySelectorAll(".selector");
selectors.forEach((selector) =>
  selector.addEventListener("click", () => {
    toggleLivePage(selector.id);
    removeContent();
    addContent(selector.id);
  })
);

// Changes the page based on the id of what you clicked on
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
    menuButton = document.querySelector("button");
    menuButton.addEventListener("click", () => {
      toggleLivePage("Menu");
      removeContent();
      menuPage();
    });
  } else if (id == "Menu") {
    menuPage();
  } else if (id == "Contact") {
    contactPage();
  }
}
