// acceso al dom 
const miH2 = document.getElementById("miH2");
const input_numero1 = document.getElementById("numero1");
const input_numero2 = document.getElementById("numero2");
const b_comparar = document.getElementById("comparar");
const resultado = document.getElementById("resultado");

b_comparar.addEventListener("click", compararNumeros);

// función para comparar

function compararNumeros() {
    const num1 = parseFloat(input_numero1.value);
    const num2 = parseFloat(input_numero2.value);
    
// verificar si son válidos 

    if (isNaN(num1) || isNaN(num2)) {
        resultado.textContent = "Por favor, ingresa números válidos";
        return;
    }
    
    if (num1 > num2) {
        const mensaje = num1 + " es MAYOR que " + num2;
        resultado.textContent = mensaje;
    } else if (num1 < num2) {
        const mensaje = num1 + " es MENOR que " + num2;
        resultado.textContent = mensaje;
    } else {
        const mensaje = num1 + " es IGUAL a " + num2;
        resultado.textContent = mensaje;
    }
}