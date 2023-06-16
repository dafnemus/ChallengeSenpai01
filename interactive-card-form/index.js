let name1 = document.getElementById("name");
let cardName = document.getElementById("cardName");

const change = () => {
  cardName.innerText = name1.value;
};

console.log(cardName, name1.value);
