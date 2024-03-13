use sakila; -- Usar esquema

-- Se crea la tabla
CREATE TABLE test(
	Id INT NOT NULL AUTO_INCREMENT,
    Name VARCHAR(50) NOT NULL,
    LastName VARCHAR(50) NOT NULL,
    PRIMARY KEY (Id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



