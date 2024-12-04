CREATE DATABASE Marvel;

USE Marvel;

CREATE TABLE usuario (
id int primary key auto_increment,
nome varchar(45),
email varchar(45),
senha varchar(45),
heroiFav varchar(45)
);	
truncate table usuario;

truncate table quiz;
-- alter table usuario rename column idUsuario to id;
CREATE TABLE Quiz (
idQuiz int primary key auto_increment,
pontos int,
fkUsuario int,
foreign key (fkUsuario) references usuario (id)
);
select * from quiz;
select * from usuario;



SET FOREIGN_KEY_CHECKS = 0;
TRUNCATE TABLE usuario;
SET FOREIGN_KEY_CHECKS = 1;













INSERT INTO usuario (nome, email, senha, heroiFav) VALUES
('Ana Castelo', 'ana@gmail.com', 'ana12345@', 'Wolverine'),
('Harison', 'hari@gmail.com', 'hari12345@', 'Homem de Ferro'),
('João', 'joão@gmail.com', 'joao12345@', 'Homem de Ferro'),
('Isabella', 'isa@gmail.com', 'isa12345@', 'Homem-Aranha');



-- dadosGraficos
 select
        (select count(heroiFav) from usuario where heroiFav = 'Wolverine') as 'Wolverine',
        (select count(heroiFav) from usuario where heroiFav = 'Homem de Ferro') as 'HomemDeFerro',
        (select count(heroiFav) from usuario where heroiFav = 'Homem-Aranha') as 'HomemAranha',
        (select count(heroiFav) from usuario where heroiFav = 'Capitão América') as 'CapitaoAmerica';
-- heroimaisescolhido
 SELECT heroiFav, COUNT(*) AS quantidade
    FROM usuario
    GROUP BY heroiFav
    ORDER BY quantidade DESC
    LIMIT 1;
-- jogadoresponts
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
    
-- media
select round(avg(pontos),2) FROM quiz;

-- maior pontuador
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
    

        
