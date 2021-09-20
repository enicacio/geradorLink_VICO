function copiartexto(){
let textocopiado = document.getElementById("link");
textocopiado.select();

document.execCommand("copy");
}