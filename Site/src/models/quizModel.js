var database = require("../database/config");

function cadastrarPontos(idUsuario, pontos) {
    var instrucao = `
      INSERT INTO Quiz (pontos, fkUsuario) VALUES ( ${idUsuario}, ${pontos});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
  }


  module.exports = {
    cadastrarPontos
  };