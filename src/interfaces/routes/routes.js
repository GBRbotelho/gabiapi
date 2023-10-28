const express = require("express");
const usersRoutes = require("./usersRoutes");
const clientsRoutes = require("./clientsRoutes");
const servicesRoutes = require("./servicesRoutes");
const registrationFormRoutes = require("./registrationFormRoutes");
const consultationRoutes = require("./consultationRoutes");

const router = express.Router();

router.use("/users", usersRoutes);
router.use("/clients", clientsRoutes);
router.use("/services", servicesRoutes);
router.use("/registrationform", registrationFormRoutes);
router.use("/consultation", consultationRoutes);

module.exports = router;
