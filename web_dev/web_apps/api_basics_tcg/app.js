"use strict";

import express from "express";
import { body, validationResult } from "express-validator";

const app = express();
import { SaveCardsOnJson, ReadCardsFromJson } from "./jsonCards.js";

// Ésto es un middleware para decirle al servidor cómo procesar diferentes tipos de archivos como el JSON
app.use(express.json());

const port = 3000;
const jsonFilePath = "./cards.json";
const cards = ReadCardsFromJson(jsonFilePath);
// console.log(cards);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
  return;
});

app.get("/api/cards", (req, resp) => {
  if (Object.keys(cards).length === 0)
    resp.status(404).json({ message: "Cards not found" });
  else resp.status(200).json(cards);
  return;
});

app.get("/api/card/:id", (req, resp) => {
  if (cards[req.params.id]) resp.status(200).json(cards[req.params.id]);
  else resp.status(404).json({ errors: "Card not found" });
  return;
});

// Ese tiene que ser el formato del JSON
app.post(
  "/api/insert/",
  [
    body("id").isNumeric(),
    body("name").isString(),
    body("type").isString(),
    body("quality").isString(),
    body("coordLowLeft").isNumeric(),
    body("coordTopRight").isNumeric(),
    body("shipSkinUrlPath").isString(),
    body("proyectileSkinUrlPath").isString(),
    body("explosionSkinUrlPath").isString(),
  ],
  (req, resp) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return resp.status(400).json({ errors: errors.array() });
    }

    const card = req.body;
    const id = card.id;

    if (cards[id]) {
      return resp
        .status(400)
        .json({ errors: `Card with ID ${id} is already in Cards ` });
    }

    delete card.id;
    cards[id] = card;

    // console.log("Cards: \n");
    // console.log(cards);

    SaveCardsOnJson(jsonFilePath, cards);

    resp.status(200).json({ message: "Card saved successfully" });
  }
);

app.post("/api/delete/", [body("id").isNumeric()], (req, resp) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return resp.status(400).json({ errors: errors.array() });
  }

  const id = req.body.id;

  if (!cards[id]) {
    return resp
      .status(400)
      .json({ errors: `Card with ID ${id} doesn't exist in Cards ` });
  } else delete cards[id];

  SaveCardsOnJson(jsonFilePath, cards);

  resp.status(200).json({ errors: `Card with ID: ${id} deleted successfully` });
});

app.post(
  "/api/update/",
  [
    body("id").isNumeric(),
    body("name").isString(),
    body("type").isString(),
    body("quality").isString(),
    body("coordLowLeft").isNumeric(),
    body("coordTopRight").isNumeric(),
    body("shipSkinUrlPath").isString(),
    body("proyectileSkinUrlPath").isString(),
    body("explosionSkinUrlPath").isString(),
  ],
  (req, resp) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return resp.status(400).json({ errors: errors.array() });
    }

    const card = req.body;
    const id = card.id;

    if (!cards[id]) {
      return resp
        .status(400)
        .json({ errors: `Card with ID ${id} doesn't exist in Cards ` });
    }

    delete card.id;
    delete cards.id;
    cards[id] = card;

    SaveCardsOnJson(jsonFilePath, cards);

    resp.status(200).json({ message: "Card updated successfully" });
  }
);
