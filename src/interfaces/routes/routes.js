const express = require("express");
const usersRoutes = require("./usersRoutes");
const clientsRoutes = require("./clientsRoutes");
const treatmentsRoutes = require("./treatmentsRoutes");
const registrationFormRoutes = require("./registrationFormRoutes");
const consultationRoutes = require("./consultationRoutes");

const router = express.Router();

router.use("/users", usersRoutes);
router.use("/clients", clientsRoutes);
router.use("/treatments", treatmentsRoutes);
router.use("/registrationform", registrationFormRoutes);
router.use("/consultations", consultationRoutes);

module.exports = router;
