const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formElements = event.target.elements;
  const formData = new FormData(event.target);

  const data = Object.fromEntries(formData);

  console.log("Form Data:", data);

  form.reset();
  formElements.firstName.focus();
});
