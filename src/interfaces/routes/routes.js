const express = require("express");
const usersRoutes = require("./usersRoutes");
const clientsRoutes = require("./clientsRoutes");
const servicesRoutes = require("./servicesRoutes");

const router = express.Router();

router.use("/users", usersRoutes);
router.use("/clients", clientsRoutes);
router.use("/services", servicesRoutes);

module.exports = router;
