// acceso al dom 
const miH2 = document.getElementById("miH2");
const input_edad = document.getElementById("edad");
const b_verificar = document.getElementById("verificar");
const resultado = document.getElementById("resultado");

b_verificar.addEventListener("click", verificarEdad);

function verificarEdad() {
    const edad = parseInt(input_edad.value);
    
    if (isNaN(edad) || edad < 0) {
        resultado.textContent = "Por favor, ingresa una edad válida";
        return;
    }
    
    if (edad >= 18) {
        const mensaje = "Sos mayor de edad";
        resultado.textContent = mensaje;
    } else {
        const mensaje = "Sos menor de edad";
        resultado.textContent = mensaje;
    }
}