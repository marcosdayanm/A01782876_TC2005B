"use strict";

import express from "express";

// Objeto que tiene todos los métodos para crear la app
const app = express();

const port = 3000;

// Ésto es un middleware para decirle al servidor cómo procesar diferentes tipos de archivos como el JSON
app.use(express.json());

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
  return;
});

app.get("/api/hello", (req, resp) => {
  console.log("Hello from server");
  resp.status(200).send("Hello from server");
  return;
});

app.get("/api/hello/:name", (req, resp) => {
  console.log(`Hello from server, ${req.params.name}`);
  resp.status(200).send(`Hello from server, ${req.params.name}`);
  return;
});

app.get("/api/hello/:name/:surname", (req, resp) => {
  console.log(`Hello from server, ${req.params.name} ${req.params.surname} \n`);
  resp
    .status(200)
    .send(`Hello from server, ${req.params.name} ${req.params.surname} \n`);
  return;
});

app.post("/api/hello/", (req, resp) => {
  console.log(req.body);
  //   resp.status(200).send(`Hello, ${req.body["name"]}, this is a POST \n`);
  resp.status(200).send(`Hello ${req.body.name}, this is a POST \n`);
  return;
});
