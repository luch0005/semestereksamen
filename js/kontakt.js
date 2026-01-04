const form = document.querySelector("form");

function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}

form.addEventListener("invalid", cancelPopup, true);

function handleSubmit(event) {
  event.preventDefault();
}

form.addEventListener("submit", handleSubmit);
form.addEventListener("invalid", cancelPopup, true);
