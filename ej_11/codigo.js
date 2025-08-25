// acceso al dom (nuestro html con todas sus propiedades)
const miH2 = document.getElementById("miH2");
const input_celsius = document.getElementById("celsius");
const b_convertir = document.getElementById("convertir");
const resultado = document.getElementById("resultado");

b_convertir.addEventListener("click", convertirTemperatura);

// función para la conversión
function convertirTemperatura() {
    const celsius = parseFloat(input_celsius.value);
    
    //si el valor ingresado no es un nro, muestra mensaje de error
    if (isNaN(celsius)) {
        resultado.textContent = "Por favor, ingresa una temperatura válida";
        return;
    }
    // formula para pasar de °c a °F
    const fahrenheit = (celsius * 9/5) + 32;
    const mensaje = celsius + "°C = " + fahrenheit.toFixed(2) + "°F"; //toFixed(2) redondea el nro a dos decimales
    resultado.textContent = mensaje;
}