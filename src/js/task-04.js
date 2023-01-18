// const decrement = document.querySelector('[data-action="decrement"]')
// const increment = document.querySelector('[data-action="increment"]')
// const value = document.querySelector("#value")
// console.log("buttons", increment, value);

const ref = {
  decrement: document.querySelector('[data-action="decrement"]'),
  increment: document.querySelector('[data-action="increment"]'),
  value: document.querySelector("#value"),
};


let value = 0;
const handleDecrement = () => { 
  value -= 1;
  // value = value-1
  ref.value.textContent= value;
};
const handleIncrement = () => { 
  value += 1;
  ref.value.textContent= value;
};

ref.decrement.addEventListener("click", handleDecrement);
ref.increment.addEventListener("click", handleIncrement);