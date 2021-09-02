// Função concatenar dados
function concatenar() {
    // Variáveis
    var linkpagina = document.getElementById("linkPagina").value;
    var plataforma = document.getElementById("plataforma").value;
    var anuncio = document.getElementById("anuncio").value;
    var publico = document.getElementById("publico").value;

    // Parâmetros
    var parametro1 = "?bio=";
    var parametro2 = "%20";

    // Gerar o link desejado
    alert(linkpagina + parametro1 + plataforma + parametro2 + anuncio + parametro2 + publico);
}

