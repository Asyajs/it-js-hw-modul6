function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const ref = {
  input: document.querySelector("input"),
  createButton: document.querySelector("[data-create]"),
  destroyButton: document.querySelector("[data-destroy]"),
  container: document.querySelector("#boxes"),
};

let amount = 0;
ref.createButton.addEventListener("click", () => createBoxes(amount));
ref.destroyButton.addEventListener("click", handleDestroy);
ref.input.addEventListener("input", handleChange);

function handleChange(e) { 
  amount = e.target.value
  console.log(amount);
};
function handleDestroy(e) { 
  ref.container.innerHTML = '';
};

function createBoxes(amount) {
  console.log(amount);
  let box = '';
  for (let index = 0; index < amount; index++) {
    const width = 30 + index * 10;
    box += `<div style="width: ${width}px; height: ${width}px; background-color: ${getRandomHexColor()} "></div>`
  }

  ref.container.innerHTML = box;
 };