var ramda = require("ramda");

function makeProcessoObject(document) {
    const processoTable = document.getElementById('tablePartesPrincipais');
    const processoColumns = processoTable.querySelectorAll('td');
    const requerentes = makeParte(processoColumns, 1);
    const requeridos = makeParte(processoColumns, 3);


    return {
        partes: {
            requerentes,
            requeridos
        }
    };
}

function makeAdvogados(html) {
    const filteredArray = ramda.drop(1, html.split('<br>'));

    const advogados = filteredArray.map(function(item) {
        const arr = item.split('&nbsp;');
        const value = arr[1];
        const finalValue = (value.substr(7, value.length)).trim();

        return finalValue;
    });

    return advogados;
}

function makeParte(processoColumns, index) {
    const processoNumberColumns = processoColumns[index];
    const html = processoNumberColumns.innerHTML;
    const orgao = (html.substr(0, html.indexOf('<br>'))).trim();
    const advogados = makeAdvogados(html);

    return {
        orgao,
        advogados,
    }
}

module.exports = makeProcessoObject;