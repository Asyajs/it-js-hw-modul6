const nameInput = document.querySelector("#name-input");
// console.log("input", nameInput);
const nameOutput = document.querySelector("#name-output");
// console.log("output",nameOutput);

// nameInput.oninput = function () {
//     if (nameInput.value === '') {
//        nameOutput.innerHTML = 'Anonymous';
//     } else{
//     nameOutput.innerHTML = nameInput.value;
//     }
// }
const handleInput = (event) => { 
  // console.log("event", event.target.value);
  const currentValue = event.target.value;
  if (currentValue==="") {
  return  nameOutput.innerHTML = "Anonymous"
  }
  nameOutput.innerHTML = currentValue
  console.log("here");
  // if (currentValue) {
  //   nameOutput.innerHTML = currentValue
  // } else {
  //   nameOutput.innerHTML = "Anonymous"
  // }
};
nameInput.addEventListener("input", handleInput);