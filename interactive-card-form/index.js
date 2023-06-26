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

form.addEventListener("submit", (e) => {
  e.preventDefault();
  document
    .getElementById("complete")
    .classList.add("complete-container-active");
  form.style.display = "none";
});
