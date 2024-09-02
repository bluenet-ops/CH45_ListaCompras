const btnAgregar = document.getElementById("btnAgregar");
const txtNombre = document.getElementById("Name");
const txtNumero = document.getElementById("Number");
const alertValidaciones = document.getElementById("alertValidaciones");
const alertValidacionesTexto = document.getElementById("alertValidacionesTexto");

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

// btnAgregar.addEventListener
btnAgregar.addEventListener("click", function(event){
    event.preventDefault();
        txtNombre.style.border="";
        txtNumero.style.border="";
    alertValidacionesTexto.innerHTML="";
        alertValidaciones.style.display= "none";

// Validar el nombre del producto
    if(txtNombre.value.length < 3){
        txtNombre.style.border="solid red medium";
    alertValidacionesTexto.innerHTML="El <strong>Nombre</strong> no es correcto o está incompleto.<br/>";
        alertValidaciones.style.display= "block";
    } // if length < 3

// validar la cantidad
    if (! validarCantidad()){
        txtNumero.style.border="solid red medium";
    alertValidacionesTexto.innerHTML+="La <strong>Cantidad</strong> no es correcta.";
        alertValidaciones.style.display= "block";
    }// ! validarCantidad

});

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

// 
btnAgregar.addEventListener("click", function(event){
    event.preventDefault();

    if (txtNumero.value.length < 1){
        txtNumero.style.border="solid red medium";
        return false;
    }
});