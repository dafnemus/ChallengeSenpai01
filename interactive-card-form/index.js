const form = document.getElementById("form");
const name = document.getElementById("name");
const cardName = document.getElementById("cardName");
const cardNumberP = document.getElementById("cardNumberP");
const cardNumber = document.getElementById("cardNumber");
const cvc = document.getElementById("cvc");
const cvcNumber = document.getElementById("cvcNumber");
const expYearCard = document.getElementById("expYearCard");
const expMontCard = document.getElementById("expMonthCard");
const date = document.getElementById("date");
const cvcError = document.getElementById("cvcError");
const cardNumberError = document.getElementById("cardNumberError");
const monthError = document.getElementById("monthError");
const yearError = document.getElementById("yearError");

let year = "00";
let month = "00";

cardName.innerText = "Jane example";
cardNumberP.innerText = "0000 0000 0000 0000";
cvcNumber.innerText = "000";
date.innerText = `${month}/${year}`;

name.addEventListener("input", () => {
  cardName.innerText = name.value;
  return cardName;
});

cardNumber.addEventListener("input", () => {
  cardNumberP.innerText = cardNumber.value.match(/.{1,4}/g).join(" ");
  return cardNumberP;
});

cvc.addEventListener("input", () => {
  cvcNumber.innerText = cvc.value;
  return cvcNumber;
});

expMontCard.addEventListener("input", () => {
  month = expMontCard.value;
  date.innerText = `${month}/${year}`;
});

expYearCard.addEventListener("input", () => {
  year = expYearCard.value;
  date.innerText = `${month}/${year}`;
});

function isValidCVC(number) {
  console.log(/^\d{3}$/.test(number));
  return /^\d{3}$/.test(cvc);
}

function isValidCardNumber(cardNumber) {
  return /^\d{16}$/.test(cardNumber);
}

function isValidMonth(month) {
  const monthNumber = parseInt(month, 10);
  return monthNumber >= 1 && monthNumber <= 12;
}

function isValidYear(year) {
  const currentYear = new Date().getFullYear();
  const yearNumber = parseInt(year, 10);
  return yearNumber >= currentYear && yearNumber <= currentYear + 10;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // if (!isValidCVC(cvc.value)) {
  //   cvcError.classList.add("error");
  //   cvcError.innerText = "error";
  // }

  // if (!isValidCardNumber(cvc.value)) {
  //   cardNumberError.classList.add("error");
  //   cardNumberError.innerText = "error";
  // }

  // if (!isValidMonth(cvc.value)) {
  //   monthError.classList.add("error");
  //   monthError.innerText = "error";
  // }

  // if (!isValidYear(cvc.value)) {
  //   yearError.classList.add("error");
  //   yearrror.innerText = "error";
  // }

  document
    .getElementById("complete")
    .classList.add("complete-container-active");
  form.style.display = "none";
  cvcError.innerText = "";
});
