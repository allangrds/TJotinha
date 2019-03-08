function makeProcessoObject(document) {
    const processoTable = document.querySelectorAll(
        '.secaoFormBody'
    );
    const processoColumns = processoTable[1].querySelectorAll('tbody tr td');
    const processoNumero = makeProcessoNumero(processoColumns);
    const processoClasse = makeProcessoClasse(processoColumns);
    const processoArea = makeProcessoArea(processoColumns);
    const processoLocalFisico = makeProcessoLocalFisico(processoColumns);
    const processoDistribuicao = makeProcessoDistribuicao(processoColumns);
    const processoControle= makeProcessoControle(processoColumns);
    const processoJuiz= makeProcessoJuiz(processoColumns);
    const processoOutrosNumeros= makeProcessoOutrosNumeros(processoColumns);
    const processoValorAcao= makeProcessoValorAcao(processoColumns);

    return {
        processo: {
            numero: processoNumero,
            classe: processoClasse,
            area: processoArea,
            local_fisico: processoLocalFisico,
            distribuicao: processoDistribuicao,
            controle: processoControle,
            juiz: processoJuiz,
            outros_numeros: processoOutrosNumeros,
            valor_acao: processoValorAcao,
        }
    };
}

function makeProcessoNumero(processoColumns) {
    const processoNumberColumns = processoColumns[1].querySelectorAll('span');
    const primeiroNumero = (processoNumberColumns[0].innerHTML).trim();
    const segundoNumero = (processoNumberColumns[1].innerHTML).trim();

    return primeiroNumero + segundoNumero;
}

function makeProcessoClasse(processoColumns) {
    const processoNumberColumns = processoColumns[4].querySelectorAll('span');

    return processoNumberColumns[0].querySelectorAll('span')[0].innerHTML;
}

function makeProcessoArea(processoColumns) {
    const processoNumberColumns = processoColumns[7].querySelectorAll('td');
    const value = (processoNumberColumns[0].textContent).trim();
    const formatedValue = value.substr(5, value.length);

    return formatedValue;
}

function makeProcessoLocalFisico(processoColumns) {
    const processoNumberColumns = processoColumns[10];

    return processoNumberColumns.textContent.trim();
}

function makeProcessoDistribuicao(processoColumns) {
    const primeiraParte = processoColumns[12].textContent.trim();
    const segundaParte = processoColumns[14].textContent.trim();

    return primeiraParte + ' / ' + segundaParte;
}

function makeProcessoControle(processoColumns) {
    const processoNumberColumns = processoColumns[16];

    return processoNumberColumns.textContent.trim();
}

function makeProcessoJuiz(processoColumns) {
    const processoNumberColumns = processoColumns[18];

    return processoNumberColumns.textContent.trim();
}

function makeProcessoOutrosNumeros(processoColumns) {
    const processoNumberColumns = processoColumns[20];

    return processoNumberColumns.textContent.trim();
}

function makeProcessoValorAcao(processoColumns) {
    const processoNumberColumns = processoColumns[22];

    return processoNumberColumns.textContent.trim();
}

module.exports = makeProcessoObject;