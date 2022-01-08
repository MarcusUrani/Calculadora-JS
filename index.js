const visor = document.getElementById("text1");
const cButton = document.getElementById("cBtn");

const showResult = (number) => {
  visor.value = visor.value + number;
};

cButton.addEventListener("click", () => {
  visor.value = "";
});