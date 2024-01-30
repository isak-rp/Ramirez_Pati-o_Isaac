/* java script 
*/
function validar(formulario){
    if(formulario.nombre.value.length < 3){
        alert("escriba por lo menos mas de tres caracteres en el campo nombre");
        formulario.nombre.focus();
    }
}
