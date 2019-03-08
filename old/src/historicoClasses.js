var ramda = require("ramda");

function historicoClassesMaker(document) {
    const tables = document.getElementsByTagName('table');
    const tablesLength = tables.length;
    const historicoClassesTable = tables[tablesLength - 5];
    const tbodies = historicoClassesTable.getElementsByTagName('tbody');
    const tbodiesLength = tbodies.length;
    let historico = [];

    for (let i = 0; i < tbodiesLength; i++) {
        const tds = tbodies[i].getElementsByTagName('td');

        historico = [
            ...historico,
            {
                data: tds[0].textContent.trim(),
                tipo: tds[1].textContent.trim(),
                classe: tds[2].textContent.trim(),
                area: tds[3].textContent.trim(),
                motivo: tds[4].textContent.trim(),
            }
        ]
    }

    return {
        historico
    };
}

module.exports = historicoClassesMaker;