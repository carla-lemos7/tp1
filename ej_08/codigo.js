// acceso al dom
const miH2 = document.getElementById("miH2");
const input_numero = document.getElementById("numero");
const b_generar = document.getElementById("generar");
const resultado = document.getElementById("resultado");

b_generar.addEventListener("click", generarTabla);

// función para generar tabla

function generarTabla() {
    const numero = parseInt(input_numero.value);
    
// si no es válido

    if (isNaN(numero)) {
        resultado.textContent = "Por favor, ingresa un número válido";
        return;
    }

// Se genera tabla 
// el bucle for empieza en 0 y va sumando de 2 en 2 hasta 20
// en cada vuelta calcular "numero *i" y lo guarda en la variable tabla

    let tabla = "Tabla del " + numero + ": ";
    
    for (let i = 0; i <= 20; i += 2) {
        const multiplicacion = numero * i;
        tabla = tabla + numero + "x" + i + "=" + multiplicacion + " ";
    }
    
    resultado.textContent = tabla;
}