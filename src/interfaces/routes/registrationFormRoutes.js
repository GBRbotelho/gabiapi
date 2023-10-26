const express = require("express");
const router = express.Router();
const registrationFormController = require("../controllers/registrationFormController");
const authenticationMiddleware = require("../../infrastructure/middlewares/authMiddleware");

router.get(
  "/:id",
  authenticationMiddleware,
  registrationFormController.getByClientId
);
// router.put(
//   "/:id",
//   authenticationMiddleware,
//   registrationFormController.updateService
// );

module.exports = router;
