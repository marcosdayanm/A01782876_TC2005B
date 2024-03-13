SELECT SCHEMA(); -- Para saber qué esquema está activo
USE sakila;  -- Cambiar de esquema
SELECT SCHEMA();

SHOW TABLES; -- Muestra las tablas del esquema

SHOW COLUMNS FROM sakila.actor; -- Enseña las columnas de una tabla y su tipo
DESC sakila.actor -- La forma abreviada del SHOW COLUMNS FROM