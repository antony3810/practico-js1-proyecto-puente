const progressBar = document.getElementById("pbar-progreso");
const formulario = document.getElementById("frm-userInfo");
const apellido = document.getElementById("inpt-apellido");
const nombre = document.getElementById("inpt-nombre");
const edad = document.getElementById("inpt-edad");
const user = document.getElementById("inpt-user");
const email = document.getElementById("inpt-email");
const tipoUser = document.getElementById("slct-tipoUser");
const requiredInputs = document.getElementById("[required]");
const buttonReset = document.getElementById("btn-Reset");

requiredInputs.forEach(element => {
element.addEventListe("input", function() {    
if (element.validity.valid){
    progressBar++;
}else{
    progressBar--;
}
 
 })
});

