var database = require("../database/config");

function cadastrarPontos(pontos, idUsuario) {
    var instrucao = `
      INSERT INTO Quiz (pontos, fkUsuario) VALUES ( ${pontos}, ${idUsuario} );
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
  }


  module.exports = {
    cadastrarPontos
  };