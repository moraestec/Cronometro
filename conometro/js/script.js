let minutos = 0;
let segundos = 0;
let cronometroAtivo = false;
let intervalId;

const minutosElement = document.getElementById("minutos");
const segundosElement = document.getElementById("segundos");
const iniciarButton = document.getElementById("iniciar");
const pararButton = document.getElementById("parar");
const zerarButton = document.getElementById("zerar");

iniciarButton.addEventListener("click", function () {
  if (!cronometroAtivo) {
    cronometroAtivo = true;
    iniciarButton.disabled = true;
    pararButton.disabled = false;
    zerarButton.disabled = true;

    intervalId = setInterval(function () {
      segundos++;
      if (segundos === 60) {
        segundos = 0;
        minutos++;
      }
      minutosElement.textContent = minutos.toString().padStart(2, "0");
      segundosElement.textContent = segundos.toString().padStart(2, "0");
    }, 1000);
  }
});

pararButton.addEventListener("click", function () {
  if (cronometroAtivo) {
    cronometroAtivo = false;
    iniciarButton.disabled = false;
    pararButton.disabled = true;
    zerarButton.disabled = false;

    clearInterval(intervalId);
  }
});

zerarButton.addEventListener("click", function () {
  minutos = 0;
  segundos = 0;
  minutosElement.textContent = "00";
  segundosElement.textContent = "00";
  pararButton.disabled = true;
});