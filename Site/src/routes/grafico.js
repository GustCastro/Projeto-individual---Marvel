var express = require("express");
var router = express.Router();

var graficoController = require("../controllers/graficoController");


router.get("/dadosGraficos", function (req, res) {
    graficoController.dadosGraficos(req, res);
});

router.get("/heroisMaisEscolhido", function (req,res) { 
    graficoController.heroisMaisEscolhido(req,res);
});
router.get("/jogadoresPontos", function (req,res) { 
    graficoController.jogadoresPontos(req,res);
});

module.exports = router;