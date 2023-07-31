const express = require("express");
const app = express();

// Importar a configuração do MongoDB
const connectToMongoDB = require("./src/infrastructure/database/mongoConfig");

// Conectar ao MongoDB
connectToMongoDB();

app.use(express.json());

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
