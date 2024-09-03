const btnAgregar = document.getElementById("btnAgregar");
const txtNombre = document.getElementById("Name");
const txtNumero = document.getElementById("Number");
const alertValidaciones = document.getElementById("alertValidaciones");
const alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
const tablaListaCompras = document.getElementById("tablaListaCompras");
const cuerpoTabla = tablaListaCompras.getElementsByTagName("tbody").item(0);
const contadorProductos = document.getElementById("contadorProductos");
const productosTotal = document.getElementById("productosTotal");
const precioTotal = document.getElementById("precioTotal");

// Bandera, al ser true permite agregar los datos a la tabla
let isValid = true;
let contador = 0;
let precio = 0;
let costoTotal = 0;
let totalEnProductos = 0;

function validarCantidad(){
    if (txtNumero.value.length == 0) {
        return false; // Si regresa falso mandará alerta en !validarCantidad
    } // length == 0

    if (isNaN(txtNumero.value)) {
        return false;
    } // isNan

    if (Number(txtNumero.value)<=0) {
        return false;
    } // < = 0

    return true;
} // validarCantidad()

function getPrecio(){
    return Math.round((Math.random()*10000))/100;
} // getPrecio

btnAgregar.addEventListener("click", function(event){
    event.preventDefault();
        txtNombre.style.border="";
        txtNumero.style.border="";
    alertValidacionesTexto.innerHTML="";
        alertValidaciones.style.display= "none";
        isValid = true;

// Validar el nombre del producto
    if(txtNombre.value.length < 3){
        txtNombre.style.border="solid red medium";
    alertValidacionesTexto.innerHTML="El <strong>Nombre</strong> no es correcto o está incompleto.<br/>";
        alertValidaciones.style.display= "block";
        isValid = false;
    } // if length < 3

// validar la cantidad
    if (! validarCantidad()){
        txtNumero.style.border="solid red medium";
    alertValidacionesTexto.innerHTML+="La <strong>Cantidad</strong> no es correcta.";
        alertValidaciones.style.display= "block";
        isValid = false;
    }// ! validarCantidad

    if (isValid) {
        contador++;
        precio = getPrecio();
        let row = 
        `<tr>
            <td>${contador}</td>
            <td>${txtNombre.value}</td>
            <td>${txtNumero.value}</td>
            <td>${precio}</td>
        </tr>`;
        cuerpoTabla.insertAdjacentHTML("beforeend", row);
        costoTotal += precio * Number(txtNumero.value);
        totalEnProductos += Number(txtNumero.value);
        contadorProductos.innerText = contador;
        productosTotal.innerText = totalEnProductos;
        precioTotal.innerText = "$" + costoTotal.toFixed(2);

        localStorage.setItem("contador", contador);
        localStorage.setItem("totalEnProductos", totalEnProductos);
        localStorage.setItem("costoTotal", costoTotal);

        txtNombre.value = "";
        txtNumero.value = "";
        txtNombre.focus();
    } // isValid

}); // btnAgregar.addEventListener

    // Este evento es cuando un campo pierde el foco, se sale del campo
txtNombre.addEventListener("blur", function(event){
    // Esto hace que se "corten" los espacios que se hayan colocado antes o después de un caracter que no sea una letra
    txtNombre.value = txtNombre.value.trim();
}); // txtNombre.addEventListener

    // Este evento es cuando un campo pierde el foco, se sale del campo
txtNumero.addEventListener("blur", function(event){
    // Esto hace que se "corten" los espacios que se hayan colocado antes o después de un caracter que no sea un número
    txtNumero.value = txtNumero.value.trim();
}); // txtNumero.addEventListener

window.addEventListener("load", function(){
    if (this.localStorage.getItem("contador") !=null){
        contador = Number(this.localStorage.getItem("contador"));
    } // !=null
    if (this.localStorage.getItem("totalEnProductos") !=null) {
        totalEnProductos = Number(this.localStorage.getItem("totalEnProductos"));
    } // !=null
    if (this.localStorage.getItem("costoTotal") !=null) {
        costoTotal = Number(this.localStorage.getItem("costoTotal"));
    } // !=null
    contadorProductos.innerText = contador;
    productosTotal.innerText = totalEnProductos;
    precioTotal.innerText = "$" + costoTotal.toFixed(2);
}); // Windows load