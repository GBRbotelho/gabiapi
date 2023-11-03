const express = require("express");
const usersRoutes = require("./usersRoutes");
const clientsRoutes = require("./clientsRoutes");
const treatmentsRoutes = require("./treatmentsRoutes");
const servicesRoutes = require("./servicesRoutes");
const registrationFormRoutes = require("./registrationFormRoutes");
const consultationRoutes = require("./consultationRoutes");
const productsRoutes = require("./productsRoutes");

const router = express.Router();

router.use("/users", usersRoutes);
router.use("/clients", clientsRoutes);
router.use("/treatments", treatmentsRoutes);
router.use("/services", servicesRoutes);
router.use("/registrationform", registrationFormRoutes);
router.use("/consultations", consultationRoutes);
router.use("/products", productsRoutes);

module.exports = router;
