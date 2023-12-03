require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const helmet = require("helmet");
const morgan = require("morgan");
const errorHandler = require("errorhandler");

//ErrorHandler
app.use(errorHandler());

//Morgan
app.use(morgan("combined")); // Pode ajustar o formato conforme necessário

//Helmet
app.use(helmet());

//Cors
const cors = require("cors");
app.use(cors());

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

app.listen(PORT, () => {
  console.log("Servidor rodando na porta 3000");
});
