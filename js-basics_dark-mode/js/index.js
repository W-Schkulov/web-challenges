console.clear();

const bodyElement = document.querySelector('[data-js="body"]');
const darkModeButton = document.querySelector('[data-js="dark-mode-button"]');
const lightModeButton = document.querySelector('[data-js="light-mode-button"]');
const toggleModeButton = document.querySelector('[data-js="toggle-button"]');

darkModeButton.addEventListener("click", () => {
  bodyElement.classList.add("button--dark");
});

lightModeButton.addEventListener("click", () => {
  bodyElement.classList.remove("button--dark");
});
toggleModeButton.addEventListener("click", () => {
  bodyElement.classList.toggle("button--dark");
});
