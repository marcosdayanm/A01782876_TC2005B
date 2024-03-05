# Node.js

## Configuraciones

### Inicializar un proyecto:

npm init

### Correr el proyecto:

npm start

### Módulos necesarios:

#### Express.js

npm install express

#### Express validator

npm install express-validator

SIrve para que se pueda validar en post la estructura de formularios, de JSON's, etc.

### Ajustes del JSON

En package.json, meter este:

- "type": "module",
- En scripts poner esto: "start": "nodemon app.js",

## CURL

Usar THUNDER CLIENT

Herramienta en la terminal para probar los endpoints de las API's
curl URI_ROUTE

Para especificar la ruta, el header, el data, etc etc:
curl -X POST -H "Content-Type": application/json -d "{'name': 'Marcos', 'surname': 'Dayan'}" `<URI>`

http://localhost:3000/api/hello/marcos
