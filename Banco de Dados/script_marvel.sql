CREATE DATABASE Marvel;

USE Marvel;

CREATE TABLE usuario (
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(45),
senha varchar(45),
heroiFav varchar(45)
);	
select * from usuario;
alter table usuario rename column idUsuario to id;

