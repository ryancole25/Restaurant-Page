function homePage() {
  const content = document.querySelector("#content");
  content.appendChild(photoDiv());
  content.appendChild(mainContainerDiv());
}

// Adds main photo for the homepage
function photoDiv() {
  const photoDiv = document.createElement("div");
  photoDiv.classList.add("photo");
  photoDiv.innerHTML = " <img src=../LakeMilton2.jpeg>";

  const banner = document.createElement("div");
  banner.classList.add("banner");

  const h1 = document.createElement("h1");
  const h3 = document.createElement("h3");
  const menuButton = document.createElement("button");
  h1.textContent = "LAKEFRONT SEAFOOD";
  h3.textContent =
    "Your spot for the best seafood in Ohio with a fabulous view of Lake Milton";
  menuButton.textContent = "View Our Menu";
  banner.appendChild(h1);
  banner.appendChild(h3);
  banner.appendChild(menuButton);

  photoDiv.appendChild(banner);

  content.appendChild(photoDiv);

  return photoDiv;
}

function mainContainerDiv() {
  const mainContainer = document.createElement("div");
  mainContainer.classList.add("main-container");

  // Left Container
  const leftContainer = document.createElement("div");
  leftContainer.classList.add("left-container");

  // Logo
  const logo = document.createElement("div");
  logo.classList.add("logo");
  logo.innerHTML = "<img src=../LMSeafoodLogo.png>";

  // Location
  const location = document.createElement("div");
  location.classList.add("location");
  location.textContent = "Location";

  let address = document.createElement("div");
  address.classList.add("address");
  address.textContent = "400 Grandview Road";
  location.appendChild(address);
  address = document.createElement("div");
  address.classList.add("address");
  address.textContent = "Lake Milton, Ohio 44429";
  location.appendChild(address);
  address = document.createElement("div");
  address.classList.add("address");
  address.textContent = "";
  location.appendChild(address);

  leftContainer.appendChild(logo);
  leftContainer.appendChild(location);

  mainContainer.appendChild(leftContainer);

  // Right Container
  const rightContainer = document.createElement("div");
  rightContainer.classList.add("right-container");

  const hours = document.createElement("div");
  hours.classList.add("hours");
  hours.textContent = "Hours";

  // Restaurant Hours
  let time = document.createElement("div");
  time.classList.add("time");
  time.textContent = "Sunday: 11am - 9pm";
  hours.appendChild(time);
  time = document.createElement("div");
  time.classList.add("time");
  time.textContent = "Monday: CLOSED";
  hours.appendChild(time);
  time = document.createElement("div");
  time.classList.add("time");
  time.textContent = "Tuesday: 11am - 9pm";
  hours.appendChild(time);
  time = document.createElement("div");
  time.classList.add("time");
  time.textContent = "Wednesday: 11am - 9pm";
  hours.appendChild(time);
  time = document.createElement("div");
  time.classList.add("time");
  time.textContent = "Thursday: 11am - 9pm";
  hours.appendChild(time);
  time = document.createElement("div");
  time.classList.add("time");
  time.textContent = "Friday: 11am - 11pm";
  hours.appendChild(time);
  time = document.createElement("div");
  time.classList.add("time");
  time.textContent = "Saturday: 11am - 11pm";
  hours.appendChild(time);

  rightContainer.appendChild(hours);

  mainContainer.appendChild(rightContainer);

  return mainContainer;
}

export { homePage };
