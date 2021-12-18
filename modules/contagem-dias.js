import initCountdown from "./contagem-regressiva.js";
export default function contagemDias() {
  const campoData = document.querySelector(".campo");
  const painel = document.querySelector(".painel");

  function adicionaTempo() {
    const data = campoData.value.replaceAll("-", " ");
    const diasFaltantes = new initCountdown(data);
    const dias = document.querySelector(".days");
    const horas = document.querySelector(".hours");
    const minutos = document.querySelector(".minutes");
    const segundos = document.querySelector(".seconds");

    dias.textContent = diasFaltantes.total.days;
    horas.textContent = diasFaltantes.total.hours;
    minutos.textContent = diasFaltantes.total.minutes;
    segundos.textContent = diasFaltantes.total.seconds;

    setInterval(() => {
      adicionaTempo();
    }, 1000);

    painel.classList.add("ativo");
  }

  campoData.addEventListener("change", adicionaTempo);
}
