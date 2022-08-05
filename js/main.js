import {complete_target} from './data.js';

function agregartitulos(){
    //DOM
    let root = document.querySelector("#root");

    complete_target.forEach( function(fruta){
        //CREAR UN ELEMENTO DENTRO DEL DOM
        let titulo = document.createElement("div");

        //SE AGREGA CONTENIDO AL ELEMENTO
        titulo.innerHTML = 
        '<div class="tarjetas">' +
            fruta +
        '</div>';

        //SE AGREGA AL DOM
        root.appendChild(titulo);
} );

}

agregartitulos();
