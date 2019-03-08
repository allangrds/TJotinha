function makePeticoesDiversasObject(document) {
    const movimentacoes = document.getElementById('tabelaTodasMovimentacoes');
    const peticoesDiversasSecao = movimentacoes
        .parentNode
        .nextSibling
        .nextSibling
        .nextSibling
        .nextSibling
        .nextSibling
        .nextSibling;
    const tbody = peticoesDiversasSecao.querySelectorAll('tbody');
    const linhas = tbody[0].querySelectorAll('tr');
    let peticoes = [];

    linhas.forEach(function(item) {
        const td = item.querySelectorAll('td');

        peticoes = [
            ...peticoes,
            {
                data: td[0].textContent.trim(),
                tipo: td[1].textContent.trim(),
            }
        ];
    });

    return {
        peticoes
    };
}

module.exports = makePeticoesDiversasObject;