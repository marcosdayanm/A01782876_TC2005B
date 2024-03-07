"use strict";

import express from "express";
import { body, validationResult } from "express-validator";

const app = express();
import { SaveCardsOnJson, ReadCardsFromJson } from "./jsonCards.js";

// Ésto es un middleware para decirle al servidor cómo procesar diferentes tipos de archivos como el JSON
app.use(express.json());

const port = 3000;
const jsonFilePath = "./cards2.json";
const cards = ReadCardsFromJson(jsonFilePath);
// console.log(cards);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
  return;
});

// Normal usage
app.get("/api/cards", (req, resp) => {
  const cards = ReadCardsFromJson(jsonFilePath);
  if (Object.keys(cards).length === 0)
    resp.status(404).json({ message: "Cards not found" });
  else resp.status(200).json(cards);
  return;
});

// Normal usage, card Id to search in route
app.get("/api/card/:id", (req, resp) => {
  const cards = ReadCardsFromJson(jsonFilePath);
  // console.log(cards);

  const found = cards.find((c) => c.id === parseInt(req.params.id));

  if (found) resp.status(200).json(found);
  else resp.status(404).json({ errors: "Card not found" });
  return;
});

// [
//   {
//     "id": 1,
//     "name": "Rocket3000",
//     "type": "Attack",
//     "quality": "Bronze",
//     "coordLowLeft": 1,
//     "coordTopRight": 2,
//     "shipSkinUrlPath": "",
//     "proyectileSkinUrlPath": "path/to/proyectile",
//     "explosionSkinUrlPath": "path/to/explosion"
//   }
// ]
// Possible to add other objects into the array of objects

app.post(
  "/api/insert/",
  body().isArray(),
  body("*.id").isNumeric(),
  body("*.name").isString(),
  body("*.type").isString(),
  body("*.quality").isString(),
  body("*.coordLowLeft").isNumeric(),
  body("*.coordTopRight").isNumeric(),
  body("*.shipSkinUrlPath").isString(),
  body("*.proyectileSkinUrlPath").isString(),
  body("*.explosionSkinUrlPath").isString(),
  (req, resp) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return resp.status(400).json({ errors: errors.array() });
    }

    let cards = ReadCardsFromJson(jsonFilePath);
    const newCards = req.body;

    const existingIds = cards.map((card) => card.id);
    const newIds = newCards.map((card) => card.id);
    const duplicates = newIds.filter((id) => existingIds.includes(id));

    if (duplicates.length > 0) {
      return resp.status(400).json({
        errors: `Card(s) with ID(s) ${duplicates.join(
          ", "
        )} are already in Cards`,
      });
    }

    // Añadir nuevas cartas a la lista existente
    cards = [...cards, ...newCards];

    // Guardar la lista actualizada en el archivo JSON
    SaveCardsOnJson(jsonFilePath, cards);

    resp.status(200).json({ message: "Cards saved successfully" });
  }
);

// Normal usage, Id for the desired card to delete in the route
app.delete("/api/delete/:id", (req, resp) => {
  const id = parseInt(req.params.id);
  let cards = ReadCardsFromJson(jsonFilePath);

  const cardFound = cards.some((c) => c.id === id);

  if (!cardFound) {
    return resp
      .status(400)
      .json({ errors: `Card with ID ${id} doesn't exist in Cards` });
  } else {
    cards = cards.filter((c) => c.id !== id);
    SaveCardsOnJson(jsonFilePath, cards);
    resp
      .status(200)
      .json({ message: `Card with ID: ${id} deleted successfully` });
  }
});

//   {
//     "id": 3,
//     "name": "Rocket3000",
//     "type": "Attack",
//     "quality": "Bronze",
//     "explosionSkinUrlPath": "path/to/explosion"
//   }

// Object to update on the body, it is possible to send some or all attributes, but Id is required

app.put(
  "/api/update/",
  [
    body("id").isNumeric(),
    body("name").optional().isString(),
    body("type").optional().isString(),
    body("quality").optional().isString(),
    body("coordLowLeft").optional().isNumeric(),
    body("coordTopRight").optional().isNumeric(),
    body("shipSkinUrlPath").optional().isString(),
    body("proyectileSkinUrlPath").optional().isString(),
    body("explosionSkinUrlPath").optional().isString(),
  ],
  (req, resp) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return resp.status(400).json({ errors: errors.array() });
    }

    const card = req.body;
    const id = card.id;
    let cards = ReadCardsFromJson(jsonFilePath);

    const cardFound = cards.some((c) => c.id === id);

    if (!cardFound) {
      return resp
        .status(400)
        .json({ errors: `Card with ID ${id} doesn't exist in Cards ` });
    }

    cards.forEach((e) => {
      if (e.id === card.id) {
        Object.assign(e, card);
      }
    });

    SaveCardsOnJson(jsonFilePath, cards);

    resp.status(200).json({ message: "Card updated successfully" });
  }
);
