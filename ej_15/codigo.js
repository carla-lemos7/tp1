// acceso al dom 
const miH2 = document.getElementById("miH2");
const input_adivinanza = document.getElementById("adivinanza");
const b_adivinar = document.getElementById("adivinar");
const b_nuevo = document.getElementById("nuevo");
const resultado = document.getElementById("resultado");

// generar número aleatorio entre 1 y 100
let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0; // contar intentos del jugador

// asociar botones con funciones
b_adivinar.addEventListener("click", adivinarNumero);
b_nuevo.addEventListener("click", nuevoJuego);

// función que se ejecuta al intentar adivinar
function adivinarNumero() {
    // se obtiene nro ingresado
    const numero = parseInt(input_adivinanza.value);

    // se valida que el nro sea entre 1 y 100
    if (isNaN(numero) || numero < 1 || numero > 100) {
        resultado.textContent = "Por favor, ingresa un número entre 1 y 100";
        return;
    }
    
    intentos = intentos + 1;
    
    // se verifica si el nro es igual, menor o mayor que el 'secreto'

    if (numero === numeroSecreto) {
        const mensaje = "¡Felicidades! Adivinaste en " + intentos + " intentos";
        resultado.textContent = mensaje;
    } else if (numero < numeroSecreto) {
        const mensaje = "El número es MÁS ALTO. Intentos: " + intentos;
        resultado.textContent = mensaje;
    } else {
        const mensaje = "El número es MÁS BAJO. Intentos: " + intentos;
        resultado.textContent = mensaje;
    }
    
    input_adivinanza.value = ""; // limpia el input para el siguiente intento 
}

// función para iniciar un nuevo juego 
function nuevoJuego() {
    // se genera nuevo nro secreto aleatorio 
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    // se reinicia el contador
    intentos = 0;
    // se muestra el msj inicial 
    resultado.textContent = "¡Nuevo juego! Adivina el número entre 1 y 100";
    input_adivinanza.value = ""; // se limpia input
}