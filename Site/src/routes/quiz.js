var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizControler");


router.post("/cadastrarPontos", function (req, res) {
    quizController.cadastrarPontos(req, res);
  });

module.exports = router;