import LakeSunset from "./LakeMilton2.jpeg";

function homePage() {
  const content = document.querySelector("#content");
  content.appendChild(photoDiv());
  content.appendChild(mainContainerDiv());
  content.appendChild(footer());
  return;
}

// Adds main photo for the homepage
function photoDiv() {
  const photoDiv = document.createElement("div");
  photoDiv.classList.add("photo");

  const myLakeSunset = new Image();
  console.log(myLakeSunset);
  myLakeSunset.src = LakeSunset;
  photoDiv.appendChild(myLakeSunset);

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
  address.innerHTML = `<a href="https://www.google.com/maps/place/100+Red+Dog+Ln,+Lake+Milton,+OH+44429/@41.1147229,-80.9833118,18z/data=!3m1!4b1!4m5!3m4!1s0x88315acc3f5c52d7:0x58d346d5bb301e8c!8m2!3d41.1147229!4d-80.9825301" target="_blank">100 Red Dog Lane</a>`;
  location.appendChild(address);
  address = document.createElement("div");
  address.classList.add("address");
  address.innerHTML = `<a href="https://www.google.com/maps/place/100+Red+Dog+Ln,+Lake+Milton,+OH+44429/@41.1147229,-80.9833118,18z/data=!3m1!4b1!4m5!3m4!1s0x88315acc3f5c52d7:0x58d346d5bb301e8c!8m2!3d41.1147229!4d-80.9825301" target="_blank">Lake Milton, Ohio 44429</a>`;
  location.appendChild(address);
  address = document.createElement("div");
  address.classList.add("address");
  address.innerHTML = "";
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

function footer() {
  const footer = document.createElement("div");
  footer.classList.add("footer");

  const mediaApps = document.createElement("div");
  mediaApps.classList.add("media-apps");

  const facebook = document.createElement("a");

  facebook.target = "_blank";
  facebook.href = "http://www.facebook.com";
  facebook.innerHTML = "<img src=../facebooklogo.svg target=_blank>";

  const instagram = document.createElement("a");
  instagram.href = "http://www.instagram.com";
  instagram.target = "_blank";
  instagram.innerHTML = "<img src=../instagramlogo.svg target=_blank>";

  mediaApps.appendChild(facebook);
  mediaApps.appendChild(instagram);

  footer.appendChild(mediaApps);
  return footer;
}

export { homePage };
