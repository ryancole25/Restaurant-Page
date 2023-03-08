import LMsunset from "./images/LM-sunset.jpeg";

import facebookLogo from "./images/facebooklogo.svg";
import instagramLogo from "./images/instagramlogo.svg";

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
  const lakeSunsetImg = document.createElement("img");
  lakeSunsetImg.src = LMsunset;
  photoDiv.appendChild(lakeSunsetImg);

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
  outsideContainer.app;
  outsideContainer.appendChild(formContainer());
  return outsideContainer;
}

function formContainer() {
  const form = document.createElement("form");
  form.setAttribute("action", "/url");
  form.setAttribute("method", "post");

  const formContain = document.createElement("div");
  formContain.classList.add("form-container");

  const leftForm = document.createElement("div");
  leftForm.classList.add("left-form");
  leftForm.appendChild(leftFormContent("firstname", "FIRST NAME"));

  const rightForm = document.createElement("div");
  rightForm.classList.add("right-form");
  rightForm.appendChild(rightFormContent("lastname", "LAST NAME"));

  formContain.appendChild(leftForm);
  formContain.appendChild(rightForm);

  form.appendChild(formContain);
  form.appendChild(emailFormContent());
  form.appendChild(messageFormContent());
  form.append(submitButton());
  return form;
}

function rightFormContent(id, text) {
  let formPair = document.createElement("div");
  formPair.classList.add("form-pair");

  let label = document.createElement("label");
  label.setAttribute("for", `${id}`);
  label.innerHTML = `${text}`;
  let input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("id", `${id}`);
  input.setAttribute("name", `${id}`);

  formPair.appendChild(label);
  formPair.appendChild(input);

  return formPair;
}

function leftFormContent(id, text) {
  let formPair = document.createElement("div");
  formPair.classList.add("form-pair");

  let label = document.createElement("label");
  label.setAttribute("for", `${id}`);
  label.innerHTML = `${text}`;
  let input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("id", `${id}`);
  input.setAttribute("name", `${id}`);
  input.setAttribute("required", "");

  formPair.appendChild(label);
  formPair.appendChild(input);

  return formPair;
}

function emailFormContent() {
  let formPair = document.createElement("div");
  formPair.classList.add("form-pair");
  let label = document.createElement("label");
  label.setAttribute("for", `email`);
  label.innerHTML = `EMAIL`;
  let input = document.createElement("input");
  input.setAttribute("type", "email");
  input.setAttribute("id", `email`);
  input.setAttribute("name", `email`);
  input.setAttribute("required", "");

  formPair.appendChild(label);
  formPair.appendChild(input);

  return formPair;
}

function messageFormContent() {
  let formPair = document.createElement("div");
  formPair.classList.add("form-pair");
  let label = document.createElement("label");
  label.setAttribute("for", `message`);
  label.innerHTML = `MESSAGE`;
  let textArea = document.createElement("textarea");
  textArea.setAttribute("type", "text");
  textArea.setAttribute("id", `message`);
  textArea.setAttribute("name", `message`);
  textArea.setAttribute("rows", `20`);
  textArea.setAttribute("cols", `75`);
  textArea.setAttribute("required", "");

  formPair.appendChild(label);
  formPair.appendChild(textArea);

  return formPair;
}

function submitButton() {
  const submitDiv = document.createElement("div");
  submitDiv.classList.add("submission");
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message-div");

  const submitBtn = document.createElement("button");
  submitBtn.setAttribute("type", "submit");
  submitBtn.innerHTML = "SUBMIT";

  // Check for form submission
  submitBtn.addEventListener("click", function (event) {
    event.preventDefault();
    checkValid();
  });

  submitDiv.appendChild(submitBtn);
  submitDiv.appendChild(messageDiv);

  return submitDiv;
}

function checkValid() {
  let firstName = document.querySelector("#firstname");
  let lastName = document.querySelector("#lastname");
  let email = document.querySelector("#email");
  let message = document.querySelector("#message");

  // Require first name, email, and message
  if (!firstName.value || !email.value || !message.value) {
    let messageDiv = document.querySelector(".message-div");
    messageDiv.textContent = "";
    checkInputs(firstName, email, message);
  } else {
    clearInputs(firstName, lastName, email, message);
  }
}

function checkInputs(firstName, email, message) {
  if (!firstName.value) {
    firstName.style.backgroundColor = "#FFDCD1";
    firstName.style.outline = "1px solid red";
  } else {
    firstName.style.backgroundColor = "white";
    firstName.style.outline = "none";
  }

  if (!email.value) {
    email.style.backgroundColor = "#FFDCD1";
    email.style.outline = "1px solid red";
  } else {
    email.style.backgroundColor = "white";
    email.style.outline = "none";
  }

  if (!message.value) {
    message.style.backgroundColor = "#FFDCD1";
    message.style.outline = "1px solid red";
  } else {
    message.style.backgroundColor = "white";
    message.style.outline = "none";
  }
}

function clearInputs(firstName, lastName, email, message) {
  let submission = document.querySelector(".submission");
  let messageDiv = document.querySelector(".message-div");
  messageDiv.textContent = `Thank you ${firstName.value}! We will get back to you shortly.`;
  submission.appendChild(messageDiv);

  firstName.value = "";
  lastName.value = "";
  email.value = "";
  message.value = "";

  firstName.style.backgroundColor = "white";
  email.style.backgroundColor = "white";
  message.style.backgroundColor = "white";

  firstName.style.outline = "none";
  email.style.outline = "none";
  message.style.outline = "none";
}

function footer() {
  const footer = document.createElement("div");
  footer.classList.add("footer");

  const mediaApps = document.createElement("div");
  mediaApps.classList.add("media-apps");

  const facebook = document.createElement("a");

  facebook.target = "_blank";
  facebook.href = "http://www.facebook.com";

  const fbLogo = document.createElement("img");
  fbLogo.src = facebookLogo;
  facebook.appendChild(fbLogo);

  const instagram = document.createElement("a");
  instagram.href = "http://www.instagram.com";
  instagram.target = "_blank";

  const igLogo = document.createElement("img");
  igLogo.src = instagramLogo;
  instagram.appendChild(igLogo);

  mediaApps.appendChild(facebook);
  mediaApps.appendChild(instagram);

  footer.appendChild(mediaApps);
  return footer;
}

export { contactPage };
