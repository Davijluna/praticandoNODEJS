-- CREATE TABLE usuarios(
--   nome VARCHAR(50),
--   email VARCHAR(100),
--   idade INT
-- );

-- adicionando os usuarios
-- INSERT INTO usuarios(idade, nome, email)
-- VALUES(
--   56,
--   'Sandra Gusmão',
--   "email@teste5.com"
-- );

-- lista os usuarios
-- SELECT * FROM 

-- lista um usuarios especifico 
-- SELECT * FROM usuarios WHERE idade < 40;

-- lista nome em string
-- SELECT * FROM usuarios WHERE nome = "nome";

-- Deletando registros no MySQL
-- SEMPRE DELETE COM WHERE//////
DELETE FROM usuarios >> se você deletar dessa forma toda a tabela será deletada.
DELETE FROM usuarios WHERE nome = "Luiz Pereira";
