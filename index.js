const express = require("express");
const app = express();

//BodyParser
const bodyParser = require("body-parser");
// ...
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Controle de Rotas
const routes = require("./src/interfaces/routes/routes");
app.use(routes);

// Config Mongo
const connectToMongoDB = require("./src/infrastructure/database/mongoConfig");
connectToMongoDB();

//Server
app.use(express.json());

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
