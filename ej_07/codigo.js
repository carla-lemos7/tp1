// acceso al dom 
const miH2 = document.getElementById("miH2");
const input_password1 = document.getElementById("password1");
const input_password2 = document.getElementById("password2");
const b_validar = document.getElementById("validar");
const resultado = document.getElementById("resultado");

b_validar.addEventListener("click", validarPasswords);

// validaci+ón

function validarPasswords() {
    const password1 = input_password1.value;
    const password2 = input_password2.value;

// error si está vacío

    if (password1 === "" || password2 === "") {
        const mensaje = "Error: Por favor, completa ambas contraseñas";
        resultado.textContent = mensaje;
    }

// error si son distintas contraseñas

    else if (password1 !== password2) {
        const mensaje = "Error: Las contraseñas no coinciden";
        resultado.textContent = mensaje;
    }

// error si no tiene la cantidad mínima

    else if (password1.length < 8) {
        const mensaje = "Error: La contraseña debe tener al menos 8 caracteres";
        resultado.textContent = mensaje;
    }

    // si cumple todos los requisitos
    else {
        const mensaje = "Éxito: Las contraseñas son válidas";
        resultado.textContent = mensaje;
    }
}