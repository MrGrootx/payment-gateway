// PAYMENT ADDRESS
const form = document.getElementById("form");

const username = document.getElementById("username");
const email = document.getElementById("email");
const address = document.getElementById("address");
const city = document.getElementById("city");
const state = document.getElementById("state");
const zipcode = document.getElementById("zipcode");

// PAYMENT METHOD
const cardnumber = document.getElementById("cardnumber");
const expmth = document.getElementById("exp");
const cvc = document.getElementById("CVC");

const submitbtn = document.getElementById("submitbtn");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  CheckRequired([
    username,
    email,
    address,
    city,
    state,
    zipcode,
    cardnumber,
    expmth,
    cvc,
  ]);
});

// Functions

// req
function CheckRequired(inputs) {
  inputs.forEach((input) => {
    if (input.value.trim() === "") {
      //error Message
      console.dir(input);
      errorInput(input, `${input.placeholder}`);
    } else {
      //success Message
      successInput(input);
    }
  });
}

// error input
function errorInput(input, message) {
  const formParent = input.parentElement;
  formParent.className = "form-group error";
  const p = formParent.querySelector("p");
  p.innerHTML = message;
}
// success input
function successInput(input) {
  const formParent = input.parentElement;
  formParent.className = "form-group success";
}
