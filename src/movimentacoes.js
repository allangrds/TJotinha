function makeMovimentacoesObject(document) {
    const tabela = document.getElementById('tabelaUltimasMovimentacoes');
    const linhas = tabela.querySelectorAll('tr');
    let movimentacoes = []

    linhas.forEach(function(conteudo) {
        const arrayDoConteudo = conteudo.getElementsByTagName('td');
        const data = arrayDoConteudo[0].textContent.trim();
        const terceiraColuna = arrayDoConteudo[2].innerHTML
        const titulo = getTitulo(arrayDoConteudo[2])
        const texto = (arrayDoConteudo[2].getElementsByTagName('span')[0].textContent).trim();

        movimentacoes = [
            ...movimentacoes,
            {
                data,
                movimento: {
                    titulo,
                    texto,
                }
            },
        ];
    });
    
    return movimentacoes;
}

function getTitulo(arr) {
    const arrHTML = arr.innerHTML
    const tituloSimples = arrHTML.substr(0, arrHTML.indexOf('<br>')).trim()
    const tituloComLinkParcial = arr.getElementsByTagName('a')
    const tituloComLink = tituloComLinkParcial.length > 0 && tituloComLinkParcial[0].innerHTML.trim()

    return tituloComLink || tituloSimples
}

module.exports = makeMovimentacoesObject;