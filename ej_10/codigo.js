// acceso al dom
const miH2 = document.getElementById("miH2");
const input_cantidad = document.getElementById("cantidad");
const b_generar = document.getElementById("generar");
const resultado = document.getElementById("resultado");

b_generar.addEventListener("click", generarLista);

function generarLista() {
    // hay que convertir el valor del input en un número entero
    const cantidad = parseInt(input_cantidad.value);
    // asegurarnos que sea un nro mayor a 0
    if (isNaN(cantidad) || cantidad <= 0) {
        resultado.textContent = "Por favor, ingresa un número válido mayor a 0";
        return; // se detiene si no es válido
    } 
    
    let lista = ""; // variable donde vamos a ir guardando elementos
    
    for (let i = 1; i <= cantidad; i++) {
        //en cada vuelta se agrega texto "elemento i"
        lista = lista + "Elemento " + i + " ";
    }
    
    // dentro de 'resultado' mostramos la lista final del elemento
    resultado.textContent = lista;
}