var graficoModel = require("../models/graficoModel.js");

function dadosGraficos(req, res) {
    graficoModel.dadosGraficos()
    .then(function (resultadodadosGraficos) {
        if (resultadodadosGraficos.length > 0) {
            console.log("Dados coletados:", resultadodadosGraficos);
            res.status(200).json({
                Wolverine: resultadodadosGraficos[0].Wolverine,
                HomemDeFerro: resultadodadosGraficos[0].HomemDeFerro,
                HomemAranha: resultadodadosGraficos[0].HomemAranha,
                CapitaoAmerica: resultadodadosGraficos[0].CapitaoAmerica,
            });
        } else {
            res.status(204).send("Nenhum resultado encontrado!");
        }
    })
    .catch(function (erro) {
        console.error("Erro ao coletar dados:", erro);
        res.status(500).send("Erro no servidor");
    });
}
function heroisMaisEscolhido(req, res) {
    graficoModel.heroisMaisEscolhido()
    .then(function (resultado) {
        if (resultado.length > 0) {
            console.log("Heoris mais escolhido:", resultado);
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!");
        }
    })
    .catch(function (erro) {
        console.error("Erro ao coletar dados:", erro);
        res.status(500).send("Erro no servidor");
    });
}
module.exports = {
    dadosGraficos,
    heroisMaisEscolhido
};