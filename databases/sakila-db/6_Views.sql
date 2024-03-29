
use sakila;

-- Crear Vista
CREATE VIEW sample_view AS
SELECT rental_id, amount FROM sakila.payment
ORDER BY rental_id;

SELECT * FROM sample_view;


-- Alterar Vista, al alterarla se borra todo lo que había y se selecciona solo lo del nuevo argumento
ALTER VIEW sample_view AS SELECT payment_date FROM sakila.payment;

SELECT * FROM sample_view;



-- Eliminar la view
DROP VIEW IF EXISTS sakila.sample_view;


-- View más sofisticada
CREATE VIEW moviesByMatthewJohanssan as
SELECT Concat(first_name, ' ', last_name) AS 'ActorName',
title AS 'MovieTitle',
release_year AS 'ReleaseYear',
length AS 'MovieLength',
c.rating AS 'MovieRating',
c.rental_rate AS 'Rental'
FROM sakila.actor a LEFT JOIN sakila.film_actor b
ON a.actor_id = b.actor_id INNER JOIN sakila.film c
ON b.film_id = c.film_id
WHERE a.first_name = 'MATTHEW'AND last_name = 'JOHANSSON';

select * from moviesByMatthewJohanssan;



