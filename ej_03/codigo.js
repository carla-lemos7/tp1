// acceso al dom 

const miH2 = document.getElementById("miH2");
const input_numero1 = document.getElementById("numero1");
const input_numero2 = document.getElementById("numero2");
const b_sumar = document.getElementById("sumar");
const resultado = document.getElementById("resultado");

b_sumar.addEventListener("click", calcularSuma);

function calcularSuma() {
    const num1 = parseFloat(input_numero1.value);
    const num2 = parseFloat(input_numero2.value);
    
    // Ahora verificar que los números sean válidos
    if (isNaN(num1) || isNaN(num2)) {
        resultado.textContent = "Por favor, ingresa números válidos";
        return;
    }
    
    const suma = num1 + num2;
    const mensaje = "La suma es: " + suma;
    resultado.textContent = mensaje;
}