USE sakila;
SET SQL_SAFE_UPDATES=0; -- Ésta variable de entorno está por default en 1, para que no podamos borrar, la setteamos a 0 para poder borrar
DESC sakila.rental;
SELECT * FROM sakila.rental;
DELETE FROM sakila.rental;
DELETE FROM sakila.rental WHERE rental_id < 10;

TRUNCATE TABLE sakila.payment -- Truncate sirve para borrar una tabla de manera brusca

-- DELETE borra pero se puede recuperar con transacciones, solo borra info
-- TRUNCATE borra pero no se puede recuperar en transacciones, solo borra info
-- DROP borra de la manera más brusca posible, borra toda la tabla con la info

