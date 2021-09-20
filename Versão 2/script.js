// Função concatenar dados
function concatenar() {
    // Variáveis
    var number = document.getElementById("number").value;
    var mensagem = document.getElementById("mensagem").value;

    // Parâmetros
    var parametro1 = "https://wa.me/"
    var parametro2 = "?text=";
    var parametro3 = "55"

    // Gerar o link desejado

    let linkpronto = (parametro1 + parametro3 + number + parametro2 + mensagem);
    document.forms['formulario']['link'].value = linkpronto;
    
}