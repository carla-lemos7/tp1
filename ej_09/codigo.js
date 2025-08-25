// acceso al dom 
const miH2 = document.getElementById("miH2");
const b_contador = document.getElementById("contador");
const resultado = document.getElementById("resultado");

// variable para contar, guarda cantidad de veces que el botón fue presionado

let clics = 0;

b_contador.addEventListener("click", incrementarContador);

// función que suma clics

function incrementarContador() {
    clics = clics + 1; // aumenta en 1 el valor de clics
    const mensaje = "Clics: " + clics;
    resultado.textContent = mensaje;
}