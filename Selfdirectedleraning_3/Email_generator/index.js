function generateEmail(user) {
  return (
    user.firstName.toLowerCase() +
    "." +
    user.lastName.toLowerCase() +
    "@duckduckgo.com"
  );
}

document
  .querySelector('[data-js="email_form"]')
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.querySelector('[data-js="first_name"]').value;
    const lastName = document.querySelector('[data-js="last_name"]').value;

    const user = { firstName, lastName };
    const email = generateEmail(user);

    document.querySelector('[data-js="generated-email"]').textContent = email;
  });
