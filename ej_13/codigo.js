// acceso al dom (nuestro html con todas sus propiedades)
const miH2 = document.getElementById("miH2");
const input_nombre = document.getElementById("nombre");
const b_buscar = document.getElementById("buscar");
const resultado = document.getElementById("resultado");

// array predefinido con los nombres
const nombres = ["Ana", "Carlos", "Marta", "Juan", "Sofia", "Pablo", "Laura", "Miguel"];

b_buscar.addEventListener("click", buscarNombre);

function buscarNombre() {
    // obtenemos valor que escribió el usuario
    const nombreBuscado = input_nombre.value;
    
    // imprimimos si está vacío
    if (nombreBuscado === "") {
        resultado.textContent = "Por favor, ingresa un nombre para buscar";
        return;
    }
    
    let encontrado = false;
    
    // recorre el array con los nombres 
    for (let i = 0; i < nombres.length; i++) {
        // si encontramos coincidencia, cambia encontrado a true
        if (nombres[i] === nombreBuscado) {
            encontrado = true;
        }
    }
    // se muestra el resultado dependiendo de si se encontró el nombre o no
    if (encontrado) {
        const mensaje = "El nombre " + nombreBuscado + " SÍ está en la lista";
        resultado.textContent = mensaje;
    } else {
        const mensaje = "El nombre " + nombreBuscado + " NO está en la lista";
        resultado.textContent = mensaje;
    }
}