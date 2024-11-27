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
    

        
