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

module.exports = {
    dadosGraficos,
    heroisMaisEscolhido
};
