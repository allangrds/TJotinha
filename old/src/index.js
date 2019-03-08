var Crawler = require("crawler");
const jsdom = require("jsdom");
const processoMaker = require('./processo');
const partesProcessoMaker = require('./partes_processo');
const movimentacoesMaker = require('./movimentacoes');
const peticoesDiversasMaker = require('./peticoesDiversas');
const historicoClassesMaker = require('./historicoClasses');

const { JSDOM } = jsdom;

var c = new Crawler({
    maxConnections : 1,
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            var $ = res.$;
            // $ is Cheerio by default
            //a lean implementation of core jQuery designed specifically for the server
            console.log($("title").text());
        }
        done();
    }
});

const processo = '04184426819928260053';
const baseUrl = 'http://esaj.tjsp.jus.br/cpopg/search.do?dadosConsulta.localPesquisa.cdLocal=-1&cbPesquisa=NUMPROC&dadosConsulta.valorConsulta=';

c.queue([{
    uri: baseUrl+processo,
    jQuery: false,

    // The global callback won't be called
    callback: function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            //console.log('Grabbed', res.body.length, 'bytes');
            handleRequestSuccess(res.body);
        }
        done();
    }
}]);

function handleRequestSuccess(body) {
    const dom = new JSDOM(body);
    const document = dom.window.document;

    const warning = document.getElementById('mensagemRetorno');
    if(warning) {
        console.log(warning[0]);
    }

    let dadosDoProcesso = makeProcessoObject(document);

    console.log(dadosDoProcesso);
}

function makeProcessoObject(document) {
    const processoObj = processoMaker(document);
    const partesProcessoObj = partesProcessoMaker(document);
    const movimentacoesObj = movimentacoesMaker(document);
    const peticoesDiversasObj = peticoesDiversasMaker(document);
    const historicoClassesObj = historicoClassesMaker(document);

    const res = {
        ...processoObj,
        ...partesProcessoObj,
        ...movimentacoesObj,
        ...peticoesDiversasObj,
        ...historicoClassesObj
    };

    //JSON.stringify

    return res;
}
