
var database = require("../database/config");

function dadosGraficos() {
    var instrucaoSql = `
    select
        (select count(heroiFav) from usuario where heroiFav = 'wolverine') as 'Wolverine',
        (select count(heroiFav) from usuario where heroiFav = 'iron_man') as 'HomemDeFerro',
        (select count(heroiFav) from usuario where heroiFav = 'homem-aranha') as 'HomemAranha',
        (select count(heroiFav) from usuario where heroiFav = 'capitao') as 'CapitaoAmerica';
       
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function heroisMaisEscolhido() {
    var instrucaoSql = `
        SELECT heroiFav, COUNT(*) AS quantidade
    FROM usuario
    GROUP BY heroiFav
    ORDER BY quantidade DESC
    LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function jogadoresPontos() {
    var instrucaoSql = `
SELECT 
    usuario.id AS jogador_id,
    usuario.nome AS nome_jogador,
    SUM(quiz.pontos) AS pontos_totais
FROM 
    usuario
JOIN 
    quiz ON quiz.fkUsuario = usuario.id
GROUP BY 
    usuario.id
ORDER BY 
    pontos_totais DESC;`
console.log("Executando a instrução SQL: \n" + instrucaoSql);
return database.executar(instrucaoSql);
    
}
function mediaPontos() {
    var instrucaoSql = `select round(avg(pontos),2) FROM quiz;
    `
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
return database.executar(instrucaoSql);
}
function maiorPontuador() {
    var instrucaoSql = `SELECT 
    usuario.nome AS nome_jogador, 
    SUM(quiz.pontos) AS total_pontos
FROM 
    usuario
JOIN 
    quiz ON usuario.id = quiz.fkUsuario
GROUP BY 
    usuario.id
ORDER BY 
    total_pontos DESC
LIMIT 1;
    `
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
return database.executar(instrucaoSql);
    
}

module.exports = {
    dadosGraficos,
    heroisMaisEscolhido,
    jogadoresPontos,
    mediaPontos,
    maiorPontuador
};
