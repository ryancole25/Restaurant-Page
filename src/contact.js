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
  const submitBtn = document.createElement("button");
  submitBtn.setAttribute("type", "submit");
  submitBtn.innerHTML = "SUBMIT";
  return submitBtn;
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
