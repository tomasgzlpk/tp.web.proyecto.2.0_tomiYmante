function requerimientoEnergeticoMasculino(altura,peso,edad,actividad){
    let acumulado= 0;
    let base = 66.5;
    altura = 5.003 * altura;
    peso = 13.75 * peso;
    edad = 6.755 *edad;
    acumulado = (base + altura + peso - edad )* actividad;
    return acumulado;
}


function requerimientoEnergeticoFemenino(altura,peso,edad,actividad){
        let acumulado= 0;
        let base = 655.1;
        altura = 1.850 * altura;
        peso = 9.563 * peso;
        edad = 4.676 *edad;
        acumulado = (base + altura + peso - edad )* actividad;
        return acumulado;




}

document.addEventListener('DOMContentLoaded', function (evt) {

    let btnAbrir = document.getElementById("btn-abrir-menu");

    btnAbrir.addEventListener('click', function () {
        let menuMobile = document.getElementById("menu-mobile");
        menuMobile.classList.remove("oculto");
    });

    let btnCerrar = document.getElementById("btn-cerrar-menu");
    btnCerrar.addEventListener("click", function () {
        let menuMobile = document.getElementById("menu-mobile");
        menuMobile.classList.add("oculto");
    });


    let formReqEnergetico = document.getElementById("form-req-energetico");
    formReqEnergetico.addEventListener("submit", function(evt) {
        evt.preventDefault();
        let altura = parseFloat(formReqEnergetico["altura"].value);
        let peso = parseFloat(formReqEnergetico["peso"].value);
        let edad = parseFloat(formReqEnergetico["edad"].value);
        let sexo = (formReqEnergetico["sexo"].value);
        let actividad = parseFloat(formReqEnergetico["actividad"].value)
        let mantenimiento = 0;
        console.log(edad);
        if(sexo == 'm') {
            mantenimiento = requerimientoEnergeticoMasculino(altura,peso,edad,actividad);
        }
        else if(sexo == 'f'){
             mantenimiento = requerimientoEnergeticoFemenino(altura,peso,edad,actividad);  
        }
        document.getElementById("mantenimiento").innerText = Math.floor(mantenimiento) ;
        document.getElementById("deficit").innerText = Math.floor(mantenimiento * 0.85) ;
        document.getElementById("superavit").innerText = Math.floor(mantenimiento * 1.15) ;
    })




});