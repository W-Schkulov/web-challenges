/* Sub-Challenge 1
Implement the following functionality: The value of the first input field is copied into the second input field on button click */

const firstCopyInput = document.querySelector("[data-js=first-copy-input]");
const secondCopyInput = document.querySelector("[data-js=second-copy-input]");
const copyButton = document.querySelector("[data-js=copy-button]");

// --v-- write your code here --v--
copyButton.addEventListener("click", () => {
  const valueToCopy = firstCopyInput.value;
  secondCopyInput.value = valueToCopy;
});
// --^-- write your code here --^--

/* Sub-Challenge 2
Implement the following functionality: The value of the first input field is copied in uppercase into the second input field on button click */

const firstCopyInUppercaseInput = document.querySelector(
  "[data-js=first-copy-uppercase-input]"
);
const secondCopyInUppercaseInput = document.querySelector(
  "[data-js=second-copy-uppercase-input]"
);
const copyInUppercaseButton = document.querySelector(
  "[data-js=copy-uppercase-button]"
);

// --v-- write your code here --v--
copyInUppercaseButton.addEventListener("click", () => {
  const oldValue = firstCopyInUppercaseInput.value;
  const newValue = oldValue.toUpperCase();
  secondCopyInUppercaseInput.value = newValue;
});
// --^-- write your code here --^--

/* Sub-Challenge 3
Implement the following functionality: The values of the two input fields switch on button click */

const firstSwitchValueInput = document.querySelector(
  "[data-js=first-switch-value-input]"
);
const secondSwitchValueInput = document.querySelector(
  "[data-js=second-switch-value-input]"
);
const switchValueButton = document.querySelector(
  "[data-js=switch-value-button]"
);

// --v-- write your code here --v--
switchValueButton.addEventListener("click", () => {
  const firstValue = firstSwitchValueInput.value;
  const secondValue = secondSwitchValueInput.value;
  firstSwitchValueInput.value = secondValue;
  secondSwitchValueInput.value = firstValue;
});
// --^-- write your code here --^--
