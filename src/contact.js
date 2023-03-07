function contactPage() {
  const content = document.querySelector("#content");
  content.appendChild(photoDiv());
  content.appendChild(contactForm());
  content.appendChild(footer());
}

// Adds main photo for the homepage
function photoDiv() {
  const photoDiv = document.createElement("div");
  photoDiv.classList.add("photo");
  photoDiv.innerHTML = " <img src=../LM-sunset.jpeg>";

  const banner = document.createElement("div");
  banner.classList.add("banner");

  photoDiv.appendChild(banner);

  content.appendChild(photoDiv);

  return photoDiv;
}

function contactForm() {
  const outsideContainer = document.createElement("div");
  outsideContainer.classList.add("outside-container");
  const heading = document.createElement("h1");
  heading.classList.add("heading");
  heading.innerHTML = "CONTACT US";
  outsideContainer.appendChild(heading);
  outsideContainer.appendChild(formContainer());
  return outsideContainer;
}

function formContainer() {
  const formContain = document.createElement("div");
  formContain.classList.add("form-container");

  const leftForm = document.createElement("div");
  leftForm.classList.add("left-form");
  // Add more left form stuff

  const rightForm = document.createElement("div");
  rightForm.classList.add("right-form");
  // Add more right form stuff

  formContain.appendChild(leftForm);
  formContain.appendChild(rightForm);

  return formContain;
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

export { contactPage };
