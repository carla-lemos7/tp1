// acceso al dom (nuestro html con todas sus propiedades)

const miH2 = document.getElementById("miH2");
const inputNombre = document.getElementById("nombre");
const resultado = document.getElementById("resultado");

function calcular() {

  const textoDentroDelInput = inputNombre.value;

  const msg = "¡Hola, " + textoDentroDelInput + "!";
  const msgConTemplate = `¡Hola, ${textoDentroDelInput} !`;

  /* resultado.textContent = "Forma 1: "+msgConTemplate  ;
  resultado.textContent += "Forma 2 (template): "+msgConTemplate; 
  */

  resultado.innerHTML = "Forma 1: <b>"+msgConTemplate+"</b>";
  resultado.innerHTML += " <br /> " ;
  resultado.innerHTML += "Forma 2 (template): "+msgConTemplate;

}