const express = require("express");
const usersRoutes = require("./usersRoutes");
const clientsRoutes = require("./clientsRoutes");

const router = express.Router();

router.use("/users", usersRoutes);
router.use("/clients", clientsRoutes);

module.exports = router;
