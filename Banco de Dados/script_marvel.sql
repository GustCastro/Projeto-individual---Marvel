CREATE DATABASE Marvel;

USE Marvel;

CREATE TABLE usuario (
id int primary key auto_increment,
nome varchar(45),
email varchar(45),
senha varchar(45),
heroiFav varchar(45)
);	
select * from usuario;


 -- alter table usuario rename column idUsuario to id;
CREATE TABLE Quiz (
idQuiz int primary key auto_increment,
pontos int,
fkUsuario int,
foreign key (fkUsuario) references usuario (id)
);
select * from quiz;

select usuario.id as jogador_id, usuario.nome as nome_jogador, quiz.pontos FROM usuario 
join quiz on quiz.fkUsuario = usuario.id ORDER BY quiz.pontos DESC;


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
    pontos_totais DESC;
-- média de pontos
select round(avg(pontos),2) FROM quiz;

SELECT 
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








select * from usuario;
select (select count(id) from usuario) as totalJogadores;

SELECT
    heroiFav,
    COUNT(*) AS quantidade
FROM usuario
GROUP BY heroiFav;
            select (select count(id) from usuario) as totalUsuarios;
            
               select heroiFav, count(*) as quantidade
        from usuario
        group by heroiFav
        having quantidade = (
            select max(quantidade) 
            from (
                select count(*) as quantidade 
                from usuario 
                group by heroiFav
            ) as subquery
        );
        SELECT heroiFav, COUNT(*) AS quantidade
    FROM usuario
    GROUP BY heroiFav
    ORDER BY quantidade DESC
    LIMIT 1;
    

        
