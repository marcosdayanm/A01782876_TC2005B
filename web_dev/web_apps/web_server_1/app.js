"use strict";

import express from "express";

// Objeto que tiene todos los métodos para crear la app
const app = express();

const port = 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.get("/api/hello", (req, resp) => {
  console.log("Hello from server");
  resp.status(200).send("Hello from server");
});

app.get("/api/hello/:name", (req, resp) => {
  console.log(`Hello from server, ${req.params.name}`);
  resp.status(200).send(`Hello from server, ${req.params.name}`);
});
