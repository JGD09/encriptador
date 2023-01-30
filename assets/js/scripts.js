const textoingresado = document.querySelector("#textoEntrada");
const textosaliente = document.querySelector("#textoSalida");

const Encriptar = document.querySelector("#btnencriptar");
const Desencriptar = document.querySelector("#btndesencriptar");
const copiar = document.querySelector("#btncopiar");

function encriptar (){
    let texto = textoingresado.value;
    let textoEncriptado = texto
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("o", "ober")
    .replaceAll("a", "ai")
    .replaceAll("u", "ufat");

    
   textosaliente.value = textoEncriptado;

   

}


btnencriptar.onclick= encriptar;

b