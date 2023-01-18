const nameInput = document.querySelector("input")
// console.log("input", nameInput);

// handlerSubjectEvent
const handlerInputBlur = event => {
  console.log("event", event.target.value.length);
  console.log("event", Number("fff"));
  if (event.target.value.length === Number(event.target.dataset.length)) {
    nameInput.classList.add("valid")
    nameInput.classList.remove("invalid")
  } else {
    nameInput.classList.add("invalid")
  }
}
nameInput.addEventListener('blur', handlerInputBlur)