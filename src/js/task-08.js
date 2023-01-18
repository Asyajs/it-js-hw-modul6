// const form = document.querySelector(".login-form")
// console.log("form", form);

// const formElements = {}
// const handleFormSubmit = event => {
//   event.preventDefault()
//   const {
//     elements: { email, password }
//   } = event.currentTarget;
//   console.log("event.target", event);
//   console.log("email,pasword", email.value, password.value);

//   if (email.value === "" || password.value === "") {
//     return alert("Please fill in all the fields!");
//   }

//   formElements.email = email.value;
//   formElements.password = password.value;
//   // console.log(`Login: ${login.value}, Password: ${password.value}`);
//   event.currentTarget.reset();
//   console.log("formElements", formElements);
// }

// form.addEventListener('submit', handleFormSubmit)










const form = document.querySelector(".login-form");
const object = {}
const handlerFormSumbit = (event) => {
  event.preventDefault();
  const emailInputValue = event.currentTarget.elements.email.value;
  // console.log("emailInput", emailInputValue);
  const passwordInputValue = event.currentTarget.elements.password.value;
  // console.log("passwordInput", passwordInputValue);
  if (emailInputValue === "" || passwordInputValue === "") {
    console.log("fjfff");
    return;
  }
  object.email = emailInputValue;
  object.password = passwordInputValue;
  console.log("object", object);
  event.currentTarget.reset();
};
form.addEventListener("submit", handlerFormSumbit);