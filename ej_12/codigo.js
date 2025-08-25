// acceso al dom 
const miH2 = document.getElementById("miH2");
const input_email = document.getElementById("email");
const b_validar = document.getElementById("validar");
const resultado = document.getElementById("resultado");

b_validar.addEventListener("click", validarEmail);

function validarEmail() {
    // obtenemos el valor escrito en el input
    const email = input_email.value;
    
    // si está vacío mostramos error

    if (email === "") {
        resultado.textContent = "Por favor, ingresa un email";
        return;
    }
    
    // el email tiene que tener @ y . 

    const tieneArroba = email.includes("@");
    const tienePunto = email.includes(".");

    // si cumple con los requisitos es válido
    
    if (tieneArroba && tienePunto) {
        const mensaje = "El email es válido";
        resultado.textContent = mensaje;
    } else {
        // si falta algún requisito no es válido
        const mensaje = "El email no es válido (debe tener @ y .)";
        resultado.textContent = mensaje;
    }
}