INSERT INTO Player (Name, Description, Level, Password, OutfitSpriteUrl) VALUES
('Ash Ketchum', 'Veterano de Kanto con un profundo amor por los Pokémon tipo eléctrico.', 50, 'pikachu123', 'http://sprites.pokemon.com/ash.png'),
('Misty Waterflower', 'Experta en Pokémon de tipo agua y ex líder de gimnasio de Ciudad Celeste.', 45, 'starmie78', 'http://sprites.pokemon.com/misty.png'),
('Brock Slate', 'Gran cocinero y experto en Pokémon de tipo roca.', 47, 'onixrock', 'http://sprites.pokemon.com/brock.png'),
('Lance Dragon', 'Campeón de la Liga Pokémon con un equipo dominado por dragones.', 70, 'dragonite999', 'http://sprites.pokemon.com/lance.png'),
('Cynthia Sands', 'Campeona de la región Sinnoh, conocida por su equilibrado y poderoso equipo.', 72, 'garchomp88', 'http://sprites.pokemon.com/cynthia.png'),
('Steven Stone', 'Experto en Pokémon de tipo acero y ex Campeón de la región Hoenn.', 68, 'metagross23', 'http://sprites.pokemon.com/steven.png'),
('Erika Willow', 'Líder del gimnasio de Ciudad Celadon, especialista en Pokémon de tipo planta.', 44, 'vileplume41', 'http://sprites.pokemon.com/erika.png'),
('Sabrina Alakazam', 'Líder de gimnasio de Ciudad Saffron, famosa por su habilidad con Pokémon psíquicos.', 46, 'kadabra22', 'http://sprites.pokemon.com/sabrina.png'),
('Giovanni Persian', 'Líder de gimnasio de Ciudad Viridian y jefe del Team Rocket, prefiere Pokémon de tipo tierra.', 48, 'nidoking34', 'http://sprites.pokemon.com/giovanni.png'),
('Falkner Pidgeot', 'Líder de gimnasio de Ciudad Malva, especialista en Pokémon de tipo volador.', 40, 'pidgeot56', 'http://sprites.pokemon.com/falkner.png'),
('Whitney Miltank', 'Líder de gimnasio de Ciudad Trigal, conocida por su difícil Miltank.', 42, 'miltank78', 'http://sprites.pokemon.com/whitney.png'),
('Clair Kingdra', 'Líder de gimnasio de Ciudad Endrino, especialista en Pokémon de tipo dragón.', 45, 'kingdra90', 'http://sprites.pokemon.com/clair.png'),
('Juan Milotic', 'Líder de gimnasio de Ciudad Algaria, experto en elegantes Pokémon de tipo agua.', 43, 'milotic12', 'http://sprites.pokemon.com/juan.png'),
('Gardenia Roserade', 'Líder de gimnasio de Ciudad Vetusta, apasionada por los Pokémon de tipo planta.', 41, 'roserade34', 'http://sprites.pokemon.com/gardenia.png'),
('Volkner Luxray', 'Líder de gimnasio de Ciudad Marina, especializado en Pokémon de tipo eléctrico.', 46, 'luxray56', 'http://sprites.pokemon.com/volkner.png');

INSERT INTO DeckType (Type, Description) VALUES
('Agua', 'Especializado en Pokémon de tipo agua y sus sinergias.'),
('Eléctrico', 'Rápido y poderoso, con muchas cartas para paralizar al oponente.'),
('Planta', 'Potencia el crecimiento rápido y el curado, ideal para estrategias de resistencia.'),
('Fuego', 'Altamente ofensivo, perfecto para quemar rápidamente al oponente.'),
('Roca', 'Defensivo y con alta resistencia, ideal para desgastar al adversario.'),
('Acero', 'Con una defensa casi impenetrable, es perfecto para jugadores estratégicos.'),
('Psíquico', 'Manipula el campo de batalla con habilidades especiales.'),
('Dragón', 'Poderoso y versátil, con una resistencia notable ante la mayoría de los tipos.'),
('Tierra', 'Excelente para controlar el ritmo del juego y generar ventajas tácticas.'),
('Volador', 'Rápido y esquivo, ideal para sorprender al oponente.'),
('Normal', 'Flexible y balanceado, con una amplia gama de estrategias posibles.'),
('Veneno', 'Debilita progresivamente al oponente, perfecto para estrategias a largo plazo.'),
('Hada', 'Especializado en contrarrestar a los poderosos Pokémon de tipo dragón.'),
('Lucha', 'Ofensivo, con cartas que rompen defensas con facilidad.'),
('Fantasma', 'Difícil de predecir, con habilidades para esquivar y atacar sorpresivamente.');

INSERT INTO Deck (Player_Id, Name, Description, Type_Id) VALUES
(1, 'Tormenta Eléctrica', 'Un mazo que canaliza el poder de los Pokémon eléctricos para aturdir y derrotar rápidamente a los oponentes.', 2),
(2, 'Olas Gigantes', 'Domina el campo de batalla con el inmenso poder de los Pokémon de tipo agua.', 1),
(3, 'Jardín Secreto', 'Este mazo planta semillas de victoria con cada movimiento, creciendo hasta dominar el juego.', 3),
(4, 'Furia Ígnea', 'Enciende el campo de batalla con este mazo que quema cualquier estrategia enemiga.', 4),
(5, 'Muralla Pétreа', 'Tan sólido como la roca, este mazo es inquebrantable y resistente.', 5),
(6, 'Fortaleza de Acero', 'Impenetrable y letal, este mazo es para quienes buscan una defensa perfecta.', 6),
(7, 'Ilusión Psíquica', 'Manipula y confunde con este mazo que juega con la mente del adversario.', 7),
(8, 'Dragones Legendarios', 'Desata el poder antiguo y majestuoso de los dragones para asegurar tu dominio.', 8),
(9, 'Temblor Terrestre', 'Controla el juego con este mazo que simboliza la fuerza y estabilidad de la tierra.', 9),
(10, 'Vuelo Supremo', 'Alza el vuelo hacia la victoria con la velocidad y agilidad de los Pokémon voladores.', 10),
(11, 'Equilibrio Natural', 'Un mazo balanceado que se adapta a cualquier situación para triunfar.', 11),
(12, 'Veneno Mortal', 'Lento pero seguro, este mazo debilita al enemigo hasta su inevitable derrota.', 12),
(13, 'Encanto Místico', 'Con la magia de los Pokémon hada, este mazo es la pesadilla de cualquier dragón.', 13),
(14, 'Puños de Furia', 'Rompe la defensa enemiga con la fuerza bruta de los Pokémon de tipo lucha.', 14),
(15, 'Sombras Acechantes', 'Atrapa a tus oponentes desprevenidos con este mazo lleno de trucos y sorpresas.', 15);

INSERT INTO Inventory (Player_Id) VALUES
(1), (2), (3), (4), (5), (6), (7), (8), (9), (10), (11), (12), (13), (14), (15);

INSERT INTO CardType (Name) VALUES
('Eléctrico'),
('Agua'),
('Planta'),
('Fuego'),
('Roca'),
('Acero'),
('Psíquico'),
('Dragón'),
('Tierra'),
('Volador'),
('Normal'),
('Veneno'),
('Hada'),
('Lucha'),
('Fantasma');

INSERT INTO Energy (Name, Points) VALUES
('Energía Eléctrica', 10),
('Energía de Agua', 10),
('Energía de Planta', 10),
('Energía de Fuego', 10),
('Energía de Roca', 10),
('Energía de Acero', 10),
('Energía Psíquica', 10),
('Energía de Dragón', 10),
('Energía de Tierra', 10),
('Energía de Volador', 10),
('Energía Normal', 10),
('Energía de Veneno', 10),
('Energía de Hada', 10),
('Energía de Lucha', 10),
('Energía Fantasma', 10);

INSERT INTO Card (Name, Description, Health, Damage, Energy_Id, Effect_Id, Level, CardType_Id, Weakness_Id) VALUES
('Pikachu', 'Un pequeño ratón eléctrico capaz de almacenar electricidad en sus mejillas.', 60, 20, 1, NULL, 1, 1, NULL),
('Squirtle', 'Este Pokémon tortuga dispara agua a presión para atacar a sus rivales.', 50, 15, 2, NULL, 1, 2, NULL),
('Bulbasaur', 'Un Pokémon semilla cuyo lomo lleva una semilla que crece con él desde su nacimiento.', 55, 15, 3, NULL, 1, 3, NULL),
('Charmander', 'La llama que tiene en la punta de la cola arde según sus sentimientos.', 50, 20, 4, NULL, 1, 4, NULL),
('Geodude', 'Se le encuentra en caminos montañosos. Sin moverse, parece una roca ordinaria.', 60, 10, 5, NULL, 1, 5, NULL),
('Skarmory', 'Su cuerpo es de acero. Vuela por los cielos a velocidades de hasta 300 km/h.', 70, 15, 6, NULL, 1, 6, NULL),
('Mewtwo', 'Fue creado por manipulación genética, pero, a pesar de los esfuerzos de los científicos, no pudieron dotarlo de un corazón sensible.', 90, 30, 7, NULL, 1, 7, NULL),
('Dragonite', 'Se dice que es capaz de volar alrededor del mundo en solo 16 horas.', 100, 25, 8, NULL, 1, 8, NULL),
('Diglett', 'Vive enterrado en la tierra. Se dice que tiene una vida de unos 100 años.', 30, 10, 9, NULL, 1, 9, NULL),
('Pidgeotto', 'Este Pokémon vuela remontando corrientes de aire caliente con sus alas desplegadas.', 60, 20, 10, NULL, 1, 10, NULL),
('Eevee', 'Gracias a su composición genética inestable, este Pokémon puede evolucionar en varias formas.', 55, 15, 11, NULL, 1, 11, NULL),
('Gengar', 'Al acecho en la oscuridad, espera la oportunidad de atacar a su presa.', 70, 25, 15, NULL, 1, 15, NULL),
('Machamp', 'Usa sus cuatro brazos poderosos para golpear con una fuerza brutal.', 80, 20, 14, NULL, 1, 14, NULL),
('Gardevoir', 'Se dice que protege a su entrenador con su vida y puede prever el futuro.', 70, 20, 7, NULL, 1, 7, NULL),
('Lapras', 'Un Pokémon gentil que lleva a la gente y a otros Pokémon cruzando el mar.', 80, 20, 2, NULL, 1, 2, NULL);

INSERT INTO Inventory_Cards (Inventory_Id, Card_Id, Quantity) VALUES
(1, 1, 4),
(2, 2, 3), 
(3, 4, 3), 
(1, 5, 2), 
(2, 15, 2), 
(3, 6, 2); 

INSERT INTO Card_Deck (Card_Id, Deck_Id, Quantity) VALUES
(1, 1, 4), 
(2, 2, 3),
(4, 3, 3), 
(5, 1, 2), 
(15, 2, 2), 
(6, 3, 2);

INSERT INTO Weakness (Name, Effect_Id) VALUES
('Fuego', 2),
('Agua', 5),
('Eléctrico', 2),
('Planta', 6),
('Psíquico', 3),
('Roca', 6),
('Tierra', 6),
('Volador', 3),
('Veneno', 4),
('Hada', 1),
('Lucha', 6),
('Fantasma', 4),
('Dragón', 2),
('Acero', 1),
('Hielo', 5);

INSERT INTO Effect (Name, Effect_URL_Script) VALUES
('Parálisis', 'http://pokemon.com/effects/paralysis'),
('Quemadura', 'http://pokemon.com/effects/burn'),
('Sueño', 'http://pokemon.com/effects/sleep'),
('Veneno', 'http://pokemon.com/effects/poison'),
('Congelación', 'http://pokemon.com/effects/freeze'),
('Confusión', 'http://pokemon.com/effects/confuse');

INSERT INTO Game (StartDateTime, State, Duration, Winner_Id) VALUES
('2024-03-28 10:00:00', 'Finished', 30, 1),
('2024-03-28 11:00:00', 'Finished', 45, 2),
('2024-03-28 12:00:00', 'Current', 10, NULL),
('2024-03-28 13:00:00', 'Scheduled', 0, NULL);

INSERT INTO Move (SpecialCardUsedId, Game_Id, Description, DamageMade, DamageReceived, Turn) VALUES
(NULL, 1, 'Pikachu ataca con Impactrueno', 20, 0, 1),
(NULL, 1, 'Squirtle responde con Pistola Agua', 0, 15, 2),
(1, 1, 'Pikachu usa Ataque Rápido', 20, 0, 3),
(2, 1, 'Squirtle usa Refugio', 0, 0, 4),
(NULL, 2, 'Charmander ataca con Lanzallamas', 30, 0, 1),
(NULL, 2, 'Bulbasaur responde con Látigo Cepa', 0, 15, 2);

INSERT INTO MovePokemonList (Move_Id, Card_Id) VALUES
(1, 1),
(2, 2), 
(3, 1), 
(4, 2), 
(5, 4), 
(6, 3); 

INSERT INTO MoveEnergyList (Move_Id, Energy_Id) VALUES
(1, 1), 
(2, 2), 
(3, 1), 
(4, 2), 
(5, 4), 
(6, 3); 

INSERT INTO MovePricesList (Move_Id, Card_Id) VALUES
(1, 7), 
(5, 8); 

INSERT INTO BenchCard (Card_Id, Game_Id, Position) VALUES
(1, 1, '1'), 
(2, 1, '2'), 
(3, 2, '1'), 
(4, 2, '2'); 

INSERT INTO PrizeCard (Card_Id, Game_Id, WonTime) VALUES
(13, 1, '2024-03-28 10:30:00'), 
(14, 1, '2024-03-28 10:35:00'), 
(15, 2, '2024-03-28 11:45:00'), 
(1, 2, '2024-03-28 11:50:00'); 





