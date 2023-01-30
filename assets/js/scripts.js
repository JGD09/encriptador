const textoingresado = document.querySelector("#textoEntrada");
const textosaliente = document.querySelector("#textoSalida");

const Encriptar = document.querySelector("#btnencriptar");
const Desencriptar = document.querySelector("#btndesencriptar");
const copiar = document.querySelector("#btncopiar");

function encriptar() {
  let textoEntrada = textoingresado.value;
  let textoEncriptado = textoEntrada
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("o", "ober")
    .replaceAll("a", "ai")
    .replaceAll("u", "ufat");

  document.getElementById("imagensalida").style.display = "none";
  document.getElementById("textos").style.display = "none";
  document.getElementById("btncopiar").style.visibility = "visible";
  document.getElementById("textoSalida").style.display = "block";

  textosaliente.value = textoEncriptado;

  document.getElementById("textoEntrada").value = "";
}

function desencriptar() {
  let textoEncriptado = textoingresado.value;
  let textoEntrada = textoEncriptado
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ai", "a")
    .replaceAll("ufat", "u");

  document.getElementById("imagensalida").style.display = "none";
  document.getElementById("textos").style.display = "none";
  document.getElementById("btncopiar").style.visibility = "visible";
  document.getElementById("textoSalida").style.display = "block";

  textosaliente.value = textoEntrada;

  document.getElementById("textoEntrada").value = "";
}
function copiartexto() {
  let textoEncriptado = textosaliente.value;
  navigator.clipboard.writeText(textoEncriptado);
}
btnencriptar.onclick = encriptar;
btndesencriptar.onclick = desencriptar;
btncopiar.onclick = copiartexto;
