

SELECT * FROM Card WHERE Health > 70;
SELECT * FROM Player WHERE Name LIKE 'A%';
SELECT * FROM Card WHERE Description LIKE '%agua%';

SELECT Deck.Name, DeckType.Type FROM Deck JOIN DeckType ON Deck.Type_Id = DeckType.DeckType_Id;

SELECT Player.Name, Card.Name FROM Inventory
JOIN Player ON Inventory.Player_Id = Player.Player_Id
JOIN Inventory_Cards ON Inventory.Inventory_Id = Inventory_Cards.Inventory_Id
JOIN Card ON Inventory_Cards.Card_Id = Card.Card_Id;

SELECT CardType_Id, COUNT(*) AS TotalCards FROM Card GROUP BY CardType_Id;

SELECT CardType_Id, COUNT(*) AS TotalCards FROM Card GROUP BY CardType_Id HAVING COUNT(*) > 1;

SELECT * FROM Player ORDER BY Level DESC;

SELECT * FROM Game WHERE Duration > 20 ORDER BY Duration DESC;

SELECT Move.Description, Energy.Name FROM Move
JOIN MoveEnergyList ON Move.Move_Id = MoveEnergyList.Move_Id
JOIN Energy ON MoveEnergyList.Energy_Id = Energy.Energy_Id;

SELECT DISTINCT Player.Name FROM Player
JOIN Inventory ON Player.Player_Id = Inventory.Player_Id
JOIN Inventory_Cards ON Inventory.Inventory_Id = Inventory_Cards.Inventory_Id
WHERE Inventory_Cards.Card_Id IN (SELECT Card_Id FROM Card WHERE Name = 'Pikachu');

SELECT * FROM Player ORDER BY Level DESC LIMIT 5;
