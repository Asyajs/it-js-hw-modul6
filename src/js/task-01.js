
const ulRef = document.querySelector('#categories');
// console.log(ulRef);
const liRef = ulRef.children;
// console.log(liRef);
const arr = [...liRef];
// console.log(arr);
console.log(`В списке ${arr.length} категории.`)

const log = arr.forEach(li => {
  const titleRef = li.querySelector('h2');
  const listRef = li.querySelectorAll('li');
  console.log(`Категория: ${titleRef.textContent}
  Количество элементов: ${listRef.length}`);
});