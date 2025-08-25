// acceso al dom (nuestro html con todas sus propiedades)

const miH2 = document.getElementById("miH2");
const b_calcular = document.getElementById("mostrar");
const resultado = document.getElementById("resultado");

b_calcular.addEventListener("click", para_ElBoton);

function para_ElBoton() {

  const msg = "¡Hola, Mundo!";

  resultado.textContent = msg;

}
