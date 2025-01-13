import React, { useState, useEffect } from 'react';

function Semaforo() {
  const [color, setColor] = useState("red");

  const colores = {
    "red": "#ff0000",
    "yellow": "#ffff00",
    "green": "#00ff00",
    "purple": "#ff00ff",
  };

  const roja = document.getElementById("roja");
  const amarilla = document.getElementById("amarilla");
  const verde = document.getElementById("verde");
  const purpura = document.getElementById("pupúra");

  useEffect(() => {
    cambiarLuz();
    setInterval(cambiarLuz, 14000);
  }, []);

  function cambiarLuz() {
    setTimeout(() => {
      roja.classList.add("active");
      amarilla.classList.remove("active");
      verde.classList.remove("active");
      purpura.classList.remove("active");
      setColor("red");
    }, 0);

    setTimeout(() => {
      roja.classList.remove("active");
      amarilla.classList.add("active");
      verde.classList.remove("active");
      purpura.classList.remove("active");
      setColor("yellow");
    }, 5000);

    setTimeout(() => {
      roja.classList.remove("active");
      amarilla.classList.remove("active");
      verde.classList.add("active");
      purpura.classList.remove("active");
      setColor("green");
    }, 7000);

    setTimeout(() => {
      roja.classList.remove("active");
      amarilla.classList.add("active");
      verde.classList.remove("active");
      purpura.classList.remove("active");
      setColor("yellow");
    }, 12000);
  }

  function agregarColorPurpura() {
    purpura.classList.add("active");
    setColor("purple");
  }

  return (
    <div>
      <h1 style={{ color: colores[color] }}>Semaforo</h1>
      <button onClick={agregarColorPurpura}>Agregar color purpura</button>
    </div>
  );
}


const roja = document.getElementById("roja");
const amarilla = document.getElementById("amarilla");
const verde = document.getElementById("verde");
const pupura = document.getElementById("pupura");

let estado = 0;

// Función para cambiar el estado de las luces
function cambiarEstado() {
  switch (estado) {
    case 0:
      roja.classList.add("active");
      amarilla.classList.remove("active");
      verde.classList.remove("active");
      pupura.classList.remove("active");
      break;
    case 1:
      roja.classList.remove("active");
      amarilla.classList.add("active");
      verde.classList.remove("active");
      pupura.classList.remove("active");
      break;
    case 2:
      amarilla.classList.remove("active");
      verde.classList.add("active");
      pupura.classList.remove("active");
      break;
    case 3:
      verde.classList.remove("active");
      pupura.classList.add("active");
      break;
    case 4:
      pupura.classList.remove("active");
      roja.classList.add("active");
      break;
  }
  estado = (estado + 1) % 5;
}

// Función para cambiar el estado de las luces al pulsar sobre ellas
function cambiarEstadoAlPulsar(event) {
  const luz = event.target;
  if (luz.classList.contains("luz")) {
    luz.classList.toggle("active");
  }
}

// Agregar evento de clic a las luces
roja.addEventListener("click", cambiarEstadoAlPulsar);
amarilla.addEventListener("click", cambiarEstadoAlPulsar);
verde.addEventListener("click", cambiarEstadoAlPulsar);
pupura.addEventListener("click", cambiarEstadoAlPulsar);

// Intervalo para cambiar el estado de las luces automáticamente
setInterval(cambiarEstado, 2000);

export default Semaforo;