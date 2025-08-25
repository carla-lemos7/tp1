// acceso al dom 
const miH2 = document.getElementById("miH2");
const input_nota = document.getElementById("nota");
const b_agregar = document.getElementById("agregar");
const b_promedio = document.getElementById("promedio");
const div_notas = document.getElementById("notas");
const resultado = document.getElementById("resultado");

// array para guardar las notas
let notas = [];

// asociar botones a funciones

b_agregar.addEventListener("click", agregarNota);
b_promedio.addEventListener("click", calcularPromedio);

// función para agregar una nota al array
function agregarNota() {
    // obtener valor y convertirlo a nro decimal 
    const nota = parseFloat(input_nota.value);
    
    // validar que sea un número 
    if (isNaN(nota)) {
        resultado.textContent = "Por favor, ingresa una nota válida"; 
        return;
    }
    
    // se agrega nota al array
    notas.push(nota);
    
    // generar texto con todas las notas 
    let listaNotas = "Notas: ";
    for (let i = 0; i < notas.length; i++) {
        listaNotas = listaNotas + notas[i] + " ";
    }
    
    div_notas.textContent = listaNotas; // muestra lista de notas
    input_nota.value = ""; // se limpia input para ingresar otra nota
}

// función para calcular promedio 
function calcularPromedio() {
    // si no hay notas, se muestra msj
    if (notas.length === 0) {
        resultado.textContent = "No hay notas para calcular";
        return;
    }
    // si hay: se suman todas las notas
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        suma = suma + notas[i];
    }
    
    // se calcula el promedio
    const promedio = suma / notas.length;
    const mensaje = "El promedio es: " + promedio; // se muestra
    resultado.textContent = mensaje;
}