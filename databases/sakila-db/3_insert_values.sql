select * from sakila.test;

select * from sakila.language;

-- Inserciones, 3 tipos
INSERT INTO sakila.test VALUES (NULL, "Juan", "piedjpojfc"); -- Ese NULL es para el Id para que SQL ponga el que va por el autoincrement
INSERT INTO sakila.test(Name, LastName) VALUES ("Jose", "Godinez");
INSERT INTO sakila.test SET Name="Juan", LastName="Gomez";

select * from sakila.language;
INSERT INTO sakila.language VALUES (NULL, "Portiguese", NOW()); -- El NOW() pone el tiempo de hoy del servidor en donde se corre la db


