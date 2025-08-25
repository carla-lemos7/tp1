// acceso al dom 
const miH2 = document.getElementById("miH2");
const input_numero = document.getElementById("numero");
const b_verificar = document.getElementById("verificar");
const resultado = document.getElementById("resultado");

b_verificar.addEventListener("click", verificarParImpar);

function verificarParImpar() {
    const numero = parseInt(input_numero.value);
    
// ver si es válido 
    if (isNaN(numero)) {
        resultado.textContent = "Por favor, ingresa un número válido";
        return;
    }
    
// par o impar 

    if (numero % 2 === 0) {
        const mensaje = "El número " + numero + " es PAR";
        resultado.textContent = mensaje;
    } else {
        const mensaje = "El número " + numero + " es IMPAR";
        resultado.textContent = mensaje;
    }
}