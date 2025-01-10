const roja = document.getElementById("roja");
const amarilla = document.getElementById("amarilla");
const verde = document.getElementById("verde");

function cambiarLuz() {
  setTimeout(() => {
    roja.classList.add("active");
    amarilla.classList.remove("active");
    verde.classList.remove("active");
  }, 0);

  setTimeout(() => {
    roja.classList.remove("active");
    amarilla.classList.add("active");
    verde.classList.remove("active");
  }, 5000);

  setTimeout(() => {
    roja.classList.remove("active");
    amarilla.classList.remove("active");
    verde.classList.add("active");
  }, 7000);

  setTimeout(() => {
    roja.classList.remove("active");
    amarilla.classList.add("active");
    verde.classList.remove("active");
  }, 12000);
}

// Iniciar el ciclo del semáforo
cambiarLuz();
setInterval(cambiarLuz, 14000);

export default Semaforo;