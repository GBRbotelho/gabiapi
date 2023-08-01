const express = require("express");
const usersRoutes = require("./usersRoutes");

const router = express.Router();

// Rotas dos Usuarios
router.use("/users", usersRoutes);

module.exports = router;
