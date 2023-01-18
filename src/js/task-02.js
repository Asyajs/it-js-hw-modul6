const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulRef = document.querySelector('#ingredients')
console.log("ulRef", ulRef);

const list = ingredients.reduce((str, item) => str + `<li>${item}</li>`, " ");
console.log("list", list);
ulRef.innerHTML = list;