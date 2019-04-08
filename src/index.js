//funcion que guarda el mensaje ingresado
//declaracion de variables codificar
let bcifrar = document.getElementById("cifrar");
bcifrar.addEventListener("click",()=> {
//guarda el mensaje y lo imprime en al consola
let mensaje1 = document.getElementById("mensaje1").value;
//variable que cambia de string a numero
let llave = parseInt(document.getElementById("numero").value);
//entrega mensaje cifrado
document.getElementById("mensaje2").value = window.cipher.encode (mensaje1,llave); 
    }
);

//declaracion de variables decodificar
let bdescifrar = document.getElementById("descifrar");
bdescifrar.addEventListener("click",()=> {
//guarda el mensaje y lo imprime en al consola
let mensaje2 = document.getElementById("mensaje2").value;
//variable que cambia de string a numero
let  llave = parseInt(document.getElementById("numero").value);
//console.log(llave);
//entrega el mensaje descifrado
document.getElementById("mensaje1").value = window.cipher.decode (mensaje2,llave); 

}   

);